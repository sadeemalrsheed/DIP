# convert_model.py
import tensorflow as tf
import tensorflowjs as tfjs
import os

print("=" * 60)
print("CONVERTING KERAS MODEL TO TENSORFLOW.JS")
print("=" * 60)

# تحميل المودل
print("\n Loading model...")
try:
    model = tf.keras.models.load_model('final_model_transfer_learning.keras')
    print(" Model loaded successfully!")
except Exception as e:
    print(f" Error loading model: {e}")
    exit()

# معلومات المودل
print("\n📊 Model Information:")
print(f"   Input shape: {model.input_shape}")
print(f"   Output shape: {model.output_shape}")
print(f"   Number of classes: {model.output_shape[-1]}")

# عرض البنية
print("\n Model Summary:")
model.summary()

# التحويل
print("\n Converting to TensorFlow.js format...")
output_dir = 'model_tfjs'

try:
    tfjs.converters.save_keras_model(model, output_dir)
    print(f" Model converted successfully!")
    print(f"   Saved to: {output_dir}/")
    
    # عرض الملفات المحولة
    print("\n Generated files:")
    for file in os.listdir(output_dir):
        file_path = os.path.join(output_dir, file)
        size = os.path.getsize(file_path) / (1024 * 1024)  # MB
        print(f"   - {file} ({size:.2f} MB)")
    
    print("\n" + "=" * 60)
    print("🎉 CONVERSION COMPLETE!")
    print("=" * 60)
    print("\nNext steps:")
    print("1. Copy 'model_tfjs' folder to your web project")
    print("2. Update class names in script.js")
    print("3. Make sure input size matches:", model.input_shape[1:3])
    
except Exception as e:
    print(f" Error during conversion: {e}")