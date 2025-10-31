import tkinter as tk
from tkinter import ttk, filedialog, messagebox
from PIL import Image, ImageTk
import random
import math

class SmartLeafApp:
    def __init__(self, root):
        self.root = root
        self.root.title("SmartLeaf - Plant Health Analysis")
        self.root.geometry("1200x800")
        self.root.configure(bg="#F0F2F5")
        self.root.resizable(False, False)
        
        # Particle tracking variables
        self.particles = []
        self.mouse_x = 0
        self.mouse_y = 0
        self.uploaded_image = None
        self.image_path = None
        
        # Initialize particles
        for _ in range(50):
            self.particles.append({
                'x': random.randint(0, 1200),
                'y': random.randint(0, 800)
            })
        
        self.create_widgets()
        self.animate_particles()
        
    def create_widgets(self):
        # Canvas for background with particles
        self.canvas = tk.Canvas(self.root, width=1200, height=800, 
                               bg="#F0F2F5", highlightthickness=0)
        self.canvas.pack(fill="both", expand=True)
        self.canvas.bind('<Motion>', self.on_mouse_move)
        
        # Header Frame
        header_frame = tk.Frame(self.canvas, bg="#225740", height=100)
        self.canvas.create_window(600, 50, window=header_frame, width=1200, height=100)
        
        # Title
        title_label = tk.Label(header_frame, text="SmartLeaf", 
                              font=("Segoe UI", 32, "bold"),
                              fg="white", bg="#225740")
        title_label.place(x=110, y=15)
        
        # Subtitle
        subtitle_label = tk.Label(header_frame, text="AI-Powered Plant Health Analysis",
                                 font=("Segoe UI", 13),
                                 fg="#90EE90", bg="#225740")
        subtitle_label.place(x=110, y=60)
        
        # Logo placeholder (circle)
        self.canvas.create_oval(40, 20, 100, 80, fill="#2E5F4C", outline="#90EE90", width=3)
        self.canvas.create_text(70, 50, text="🌿", font=("Segoe UI", 30))
        
        # Upload Panel (Left)
        upload_panel = tk.Frame(self.canvas, bg="white", relief="flat")
        self.canvas.create_window(320, 440, window=upload_panel, width=540, height=620)
        self.create_rounded_rectangle(50, 130, 590, 750, radius=20, fill="white", outline="#DCDCDC")
        
        # Upload Panel Content
        upload_title = tk.Label(upload_panel, text="Upload a Clear Leaf Image",
                               font=("Segoe UI", 14, "bold"),
                               fg="#225740", bg="white")
        upload_title.place(x=170, y=20, width=200)
        
        # Image Display Area
        self.image_frame = tk.Frame(upload_panel, bg="#F5F5F5", relief="solid", bd=2)
        self.image_frame.place(x=70, y=70, width=400, height=350)
        
        self.image_label = tk.Label(self.image_frame, text="Upload plant leaf image",
                                    font=("Segoe UI", 12),
                                    fg="#969696", bg="#F5F5F5")
        self.image_label.pack(expand=True)
        
        # Upload Button
        self.upload_btn = tk.Button(upload_panel, text="📁 Choose Image",
                                    font=("Segoe UI", 12, "bold"),
                                    bg="#4CAF50", fg="white",
                                    relief="flat", cursor="hand2",
                                    command=self.upload_image)
        self.upload_btn.place(x=145, y=440, width=250, height=50)
        self.upload_btn.bind('<Enter>', lambda e: self.on_button_hover(self.upload_btn, "#5DBF61"))
        self.upload_btn.bind('<Leave>', lambda e: self.on_button_hover(self.upload_btn, "#4CAF50"))
        
        # Analyze Button
        self.analyze_btn = tk.Button(upload_panel, text="🔍 Analyze Plant",
                                     font=("Segoe UI", 12, "bold"),
                                     bg="#225740", fg="white",
                                     relief="flat", cursor="hand2",
                                     state="disabled",
                                     command=self.analyze_plant)
        self.analyze_btn.place(x=145, y=510, width=250, height=50)
        
        # Result Panel (Right)
        result_panel = tk.Frame(self.canvas, bg="white", relief="flat")
        self.canvas.create_window(880, 440, window=result_panel, width=540, height=620)
        self.create_rounded_rectangle(610, 130, 1150, 750, radius=20, fill="white", outline="#DCDCDC")
        
        # Result Panel Content
        result_title = tk.Label(result_panel, text="Analysis Results",
                               font=("Segoe UI", 14, "bold"),
                               fg="#225740", bg="white")
        result_title.place(x=220, y=20)
        
        # Progress Bar
        self.progress = ttk.Progressbar(result_panel, mode='indeterminate', length=400)
        self.progress.place(x=70, y=90)
        
        # Plant Name Section
        plant_name_title = tk.Label(result_panel, text="Plant Name:",
                                    font=("Segoe UI", 11, "bold"),
                                    fg="#505050", bg="white", anchor="w")
        plant_name_title.place(x=70, y=140, width=400)
        
        self.plant_name_frame = tk.Frame(result_panel, bg="#F0FFF0", relief="solid", bd=1)
        self.plant_name_frame.place(x=70, y=180, width=400, height=50)
        
        self.plant_name_label = tk.Label(self.plant_name_frame, 
                                         text="Waiting for analysis...",
                                         font=("Segoe UI", 16, "bold"),
                                         fg="#225740", bg="#F0FFF0")
        self.plant_name_label.pack(expand=True)
        
        # Health Status Section
        health_title = tk.Label(result_panel, text="Health Status:",
                               font=("Segoe UI", 11, "bold"),
                               fg="#505050", bg="white", anchor="w")
        health_title.place(x=70, y=270, width=400)
        
        self.health_frame = tk.Frame(result_panel, bg="#F5F5F5", relief="solid", bd=1)
        self.health_frame.place(x=70, y=310, width=400, height=50)
        
        self.health_label = tk.Label(self.health_frame, text="Unknown",
                                     font=("Segoe UI", 16, "bold"),
                                     fg="#646464", bg="#F5F5F5")
        self.health_label.pack(expand=True)
        
        # Tips Section
        tips_frame = tk.Frame(result_panel, bg="#FFFADC", relief="solid", bd=2)
        tips_frame.place(x=70, y=440, width=400, height=100)
        
        tips_label = tk.Label(tips_frame, 
                             text="💡 Tip: Use a clear image with\ngood lighting for best results",
                             font=("Segoe UI", 9),
                             fg="#646464", bg="#FFFADC",
                             justify="center")
        tips_label.pack(expand=True)
        
    def create_rounded_rectangle(self, x1, y1, x2, y2, radius=20, **kwargs):
        points = [
            x1+radius, y1,
            x2-radius, y1,
            x2, y1,
            x2, y1+radius,
            x2, y2-radius,
            x2, y2,
            x2-radius, y2,
            x1+radius, y2,
            x1, y2,
            x1, y2-radius,
            x1, y1+radius,
            x1, y1
        ]
        return self.canvas.create_polygon(points, smooth=True, **kwargs)
    
    def on_mouse_move(self, event):
        self.mouse_x = event.x
        self.mouse_y = event.y
        
    def animate_particles(self):
        self.canvas.delete("particle")
        self.canvas.delete("line")
        
        # Draw particles
        for particle in self.particles:
            x, y = particle['x'], particle['y']
            self.canvas.create_oval(x-2, y-2, x+2, y+2, 
                                   fill="#4CAF50", outline="",
                                   tags="particle")
            
            # Draw connection lines to mouse
            distance = math.sqrt((x - self.mouse_x)**2 + (y - self.mouse_y)**2)
            if distance < 150:
                alpha = int(255 * (1 - distance/150))
                color = f"#{alpha:02x}{alpha:02x}{alpha:02x}"
                self.canvas.create_line(x, y, self.mouse_x, self.mouse_y,
                                       fill="#B0E0B0", width=1,
                                       tags="line")
        
        self.root.after(50, self.animate_particles)
    
    def on_button_hover(self, button, color):
        button.config(bg=color)
    
    def upload_image(self):
        file_path = filedialog.askopenfilename(
            title="Select Plant Leaf Image",
            filetypes=[("Image Files", "*.jpg *.jpeg *.png *.bmp")]
        )
        
        if file_path:
            try:
                # Load and resize image
                image = Image.open(file_path)
                image.thumbnail((380, 330), Image.Resampling.LANCZOS)
                photo = ImageTk.PhotoImage(image)
                
                # Display image
                self.image_label.config(image=photo, text="")
                self.image_label.image = photo
                
                # Enable analyze button
                self.analyze_btn.config(state="normal", cursor="hand2")
                self.analyze_btn.bind('<Enter>', lambda e: self.on_button_hover(self.analyze_btn, "#2E6850"))
                self.analyze_btn.bind('<Leave>', lambda e: self.on_button_hover(self.analyze_btn, "#225740"))
                
                self.image_path = file_path
                
                # Reset results
                self.plant_name_label.config(text="Waiting for analysis...", fg="#225740")
                self.plant_name_frame.config(bg="#F0FFF0")
                self.health_label.config(text="Unknown", fg="#646464")
                self.health_frame.config(bg="#F5F5F5")
                
            except Exception as e:
                messagebox.showerror("Error", f"Error loading image: {str(e)}")
    
    def analyze_plant(self):
        # Disable buttons during analysis
        self.analyze_btn.config(state="disabled")
        self.upload_btn.config(state="disabled")
        self.progress.start(10)
        
        # Simulate analysis (replace with actual model later)
        self.root.after(2000, self.show_results)
    
    def show_results(self):
        # Stop progress
        self.progress.stop()
        
        # Simulated results - replace with actual model results
        self.plant_name_label.config(text="Aloe Vera")
        
        # Random health status for demo
        health_status = random.choice([0, 1, 2])
        
        if health_status == 0:
            self.health_label.config(text="✓ Healthy & Excellent", fg="#4CAF50")
            self.health_frame.config(bg="#E8F5E9")
        elif health_status == 1:
            self.health_label.config(text="⚠ Needs Attention", fg="#FF9800")
            self.health_frame.config(bg="#FFF3E0")
        else:
            self.health_label.config(text="✗ Unhealthy", fg="#F44336")
            self.health_frame.config(bg="#FFEBEE")
        
        # Re-enable buttons
        self.analyze_btn.config(state="normal")
        self.upload_btn.config(state="normal")

if __name__ == "__main__":
    root = tk.Tk()
    app = SmartLeafApp(root)
    root.mainloop()