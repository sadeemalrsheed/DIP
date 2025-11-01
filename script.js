// ==================== MODEL & CARE RECOMMENDATIONS ====================

// بيانات العناية لكل نبتة وحالتها
const plantCareData = {
  'Apple_Apple_scab': {
    plantName: 'Apple',
    healthStatus: 'Fungal disease — Act soon',
    tips: [
      { icon: '💧', text: 'Use drip irrigation; keep foliage dry.' },
      { icon: '✂️', text: 'Remove affected leaves/fruit promptly.' },
      { icon: '🌬️', text: 'Improve airflow with light pruning.' }
    ]
  },
  'Apple_Black_rot': {
    plantName: 'Apple',
    healthStatus: 'Fungal canker — Act soon',
    tips: [
      { icon: '✂️', text: 'Prune to healthy wood; sanitize tools.' },
      { icon: '🧹', text: 'Clear fallen fruit and debris.' },
      { icon: '🌬️', text: 'Keep canopy open to reduce moisture.' }
    ]
  },
  'Apple_Cedar_apple_rust': {
    plantName: 'Apple',
    healthStatus: 'Fungal rust — Act soon',
    tips: [
      { icon: '🌬️', text: 'Increase spacing and airflow.' },
      { icon: '🧹', text: 'Remove infected leaves when seen.' },
      { icon: '💧', text: 'Avoid wetting leaves during irrigation.' }
    ]
  },
  'Apple_healthy': {
    plantName: 'Apple',
    healthStatus: 'Healthy — Routine care',
    tips: [
      { icon: '☀️', text: 'Provide 6–8 hours of sunlight daily.' },
      { icon: '💧', text: 'Water deeply and consistently.' },
      { icon: '🧪', text: 'Feed with balanced nutrients as needed.' }
    ]
  },
  'Blueberry_healthy': {
    plantName: 'Blueberry',
    healthStatus: 'Healthy — Routine care',
    tips: [
      { icon: '🧪', text: 'Keep soil slightly acidic and well-drained.' },
      { icon: '💧', text: 'Maintain even moisture with mulch.' },
      { icon: '☀️', text: 'Provide full sun for best yields.' }
    ]
  },
  'Cherry_Powdery_mildew': {
    plantName: 'Cherry',
    healthStatus: 'Fungal disease — Manage',
    tips: [
      { icon: '🌬️', text: 'Boost ventilation; avoid leaf wetness.' },
      { icon: '🧹', text: 'Remove visibly affected growth.' },
      { icon: '💧', text: 'Water at soil level, not on leaves.' }
    ]
  },
  'Cherry_healthy': {
    plantName: 'Cherry',
    healthStatus: 'Healthy — Routine care',
    tips: [
      { icon: '☀️', text: 'Ensure full sun exposure.' },
      { icon: '💧', text: 'Keep soil evenly moist, well-drained.' },
      { icon: '✂️', text: 'Light pruning to open the canopy.' }
    ]
  },
  'Corn_Cercospora_leaf_spot Gray_leaf_spot': {
    plantName: 'Corn',
    healthStatus: 'Fungal leaf spots — Act soon',
    tips: [
      { icon: '🔁', text: 'Rotate crops; manage residue.' },
      { icon: '🌬️', text: 'Avoid overcrowding to reduce humidity.' },
      { icon: '💧', text: 'Irrigate early so foliage dries quickly.' }
    ]
  },
  'Corn_Common_rust_': {
    plantName: 'Corn',
    healthStatus: 'Fungal rust — Monitor/act soon',
    tips: [
      { icon: '🌬️', text: 'Promote airflow between plants.' },
      { icon: '🧹', text: 'Remove heavily spotted leaves.' },
      { icon: '💧', text: 'Water at base; avoid overhead watering.' }
    ]
  },
  'Corn_Northern_Leaf_Blight': {
    plantName: 'Corn',
    healthStatus: 'Fungal blight — Act soon',
    tips: [
      { icon: '🔁', text: 'Use rotation and clean fields.' },
      { icon: '🌬️', text: 'Reduce canopy humidity with spacing.' },
      { icon: '🧹', text: 'Clear infected foliage when noticed.' }
    ]
  },
  'Corn_healthy': {
    plantName: 'Corn',
    healthStatus: 'Healthy — Routine care',
    tips: [
      { icon: '💧', text: 'Water consistently during tasseling and fill.' },
      { icon: '🧪', text: 'Maintain balanced nutrition.' },
      { icon: '🌬️', text: 'Avoid excessive plant density.' }
    ]
  },
  'Cucumber ـBacterialـWilt': {
    plantName: 'Cucumber',
    healthStatus: 'Bacterial wilt — Immediate action',
    tips: [
      { icon: '🧹', text: 'Remove wilting plants to limit spread.' },
      { icon: '🪲', text: 'Reduce insect activity around vines.' },
      { icon: '🔁', text: 'Practice crop rotation between seasons.' }
    ]
  },
  'Cucumber_Gummy_Stem_Blight': {
    plantName: 'Cucumber',
    healthStatus: 'Fungal stem/leaf issue — Act soon',
    tips: [
      { icon: '🌬️', text: 'Train vines for better airflow.' },
      { icon: '🧹', text: 'Clear infected leaves and debris.' },
      { icon: '💧', text: 'Keep foliage dry; water at soil level.' }
    ]
  },
  'Cucumber_Pythium_Fruit_Rot': {
    plantName: 'Cucumber',
    healthStatus: 'Fruit rot — Act soon',
    tips: [
      { icon: '🧺', text: 'Keep fruit off wet soil using supports.' },
      { icon: '💧', text: 'Improve drainage; avoid waterlogging.' },
      { icon: '🌬️', text: 'Increase airflow to speed drying.' }
    ]
  },
  'CucumberـAnthracnose': {
    plantName: 'Cucumber',
    healthStatus: 'Fungal leaf/fruit spots — Act soon',
    tips: [
      { icon: '🌬️', text: 'Avoid dense foliage; enhance airflow.' },
      { icon: '🧹', text: 'Remove spotted tissues promptly.' },
      { icon: '💧', text: 'Irrigate early; keep leaves dry.' }
    ]
  },
  'CucumberـBelly Rot': {
    plantName: 'Cucumber',
    healthStatus: 'Fruit contact rot — Manage',
    tips: [
      { icon: '🧺', text: 'Elevate fruit to prevent soil contact.' },
      { icon: '💧', text: 'Water in the morning for faster drying.' },
      { icon: '🧹', text: 'Maintain clean beds and mulch.' }
    ]
  },
  'CucumberـDownyـMildew': {
    plantName: 'Cucumber',
    healthStatus: 'Downy mildew — Act soon',
    tips: [
      { icon: '🌬️', text: 'Maximize ventilation on vines.' },
      { icon: '💧', text: 'Avoid leaf wetness; water at roots.' },
      { icon: '🧹', text: 'Remove lower leaves if heavily affected.' }
    ]
  },
  'Cucumberـhealthy': {
    plantName: 'Cucumber',
    healthStatus: 'Healthy — Routine care',
    tips: [
      { icon: '🪜', text: 'Train on trellis for clean fruit.' },
      { icon: '💧', text: 'Keep soil evenly moist, well-drained.' },
      { icon: '🧪', text: 'Support fruiting with balanced feeding.' }
    ]
  },
  'Downy_mildew_on_lettuce': {
    plantName: 'Lettuce',
    healthStatus: 'Downy mildew — Act soon',
    tips: [
      { icon: '🌬️', text: 'Reduce humidity; increase airflow.' },
      { icon: '💧', text: 'Irrigate early to keep leaves dry by night.' },
      { icon: '🧹', text: 'Remove affected leaves to slow spread.' }
    ]
  },
  'Grape_Black_rot': {
    plantName: 'Grape',
    healthStatus: 'Fungal fruit/leaf rot — Act soon',
    tips: [
      { icon: '🧹', text: 'Clear mummified fruit and debris.' },
      { icon: '🌬️', text: 'Open the canopy for better drying.' },
      { icon: '💧', text: 'Avoid wetting clusters when watering.' }
    ]
  },
  'Grape_Esca_(Black_Measles)': {
    plantName: 'Grape',
    healthStatus: 'Trunk disease — Manage',
    tips: [
      { icon: '✂️', text: 'Use clean cuts; avoid large wounds in wet weather.' },
      { icon: '🧹', text: 'Remove non-recoverable wood when necessary.' },
      { icon: '🌬️', text: 'Keep vines vigorous with good airflow.' }
    ]
  },
  'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)': {
    plantName: 'Grape',
    healthStatus: 'Leaf blight — Act soon',
    tips: [
      { icon: '🌬️', text: 'Thin leaves for ventilation.' },
      { icon: '🧹', text: 'Remove affected foliage and litter.' },
      { icon: '💧', text: 'Water early; avoid wet clusters.' }
    ]
  },
  'Grape_healthy': {
    plantName: 'Grape',
    healthStatus: 'Healthy — Routine care',
    tips: [
      { icon: '✂️', text: 'Light summer thinning for light and air.' },
      { icon: '💧', text: 'Water consistently without soaking clusters.' },
      { icon: '☀️', text: 'Provide full sun where possible.' }
    ]
  },
  'Lemon_Anthracnose': {
    plantName: 'Lemon',
    healthStatus: 'Fungal disease — Act soon',
    tips: [
      { icon: '✂️', text: 'Remove damaged twigs and leaves.' },
      { icon: '🌬️', text: 'Improve airflow around the canopy.' },
      { icon: '💧', text: 'Keep foliage dry; avoid overhead watering.' }
    ]
  },
  'Lemon_Black_Spot': {
    plantName: 'Lemon',
    healthStatus: 'Fungal fruit/leaf spots — Act soon',
    tips: [
      { icon: '🧹', text: 'Collect and discard fallen leaves/fruit.' },
      { icon: '🌬️', text: 'Thin canopy to reduce moisture.' },
      { icon: '💧', text: 'Water at soil level only.' }
    ]
  },
  'Lemon_Citrus_Canker': {
    plantName: 'Lemon',
    healthStatus: 'Bacterial canker — Immediate action',
    tips: [
      { icon: '🧹', text: 'Remove heavily affected parts carefully.' },
      { icon: '🧼', text: 'Sanitize tools and hands after handling.' },
      { icon: '💧', text: 'Avoid splashing water on leaves.' }
    ]
  },
  'Lemon_Citrus_Leaf_Miner': {
    plantName: 'Lemon',
    healthStatus: 'Leaf miner — Pest issue (Manage)',
    tips: [
      { icon: '🔍', text: 'Monitor tender new flush for trails.' },
      { icon: '✂️', text: 'Remove severely curled leaves.' },
      { icon: '🌱', text: 'Encourage steady, not lush, new growth.' }
    ]
  },
  'Lemon_Curl_Leaf': {
    plantName: 'Lemon',
    healthStatus: 'Physiological/pest issue — Check & manage',
    tips: [
      { icon: '🔍', text: 'Check for sap-sucking pests on leaves.' },
      { icon: '💧', text: 'Keep watering steady; avoid extremes.' },
      { icon: '🧪', text: 'Ensure balanced nutrients to support foliage.' }
    ]
  },
  'Lemon_Dry_leaf': {
    plantName: 'Lemon',
    healthStatus: 'Leaf drying — Check water/heat',
    tips: [
      { icon: '💧', text: 'Maintain regular deep watering.' },
      { icon: '🌬️', text: 'Reduce heat stress with airflow/shade when hot.' },
      { icon: '🧹', text: 'Remove brittle leaves to stimulate new growth.' }
    ]
  },
  'Lemon_Greening': {
    plantName: 'Lemon',
    healthStatus: 'Citrus greening — Immediate action',
    tips: [
      { icon: '🔍', text: 'Watch for uneven yellowing patterns.' },
      { icon: '🧹', text: 'Remove severely affected branches/trees if needed.' },
      { icon: '🌱', text: 'Use healthy, verified planting material.' }
    ]
  },
  'Lemon_Healthy': {
    plantName: 'Lemon',
    healthStatus: 'Healthy — Routine care',
    tips: [
      { icon: '☀️', text: 'Provide full sun and good drainage.' },
      { icon: '💧', text: 'Deep, infrequent watering to strengthen roots.' },
      { icon: '🧪', text: 'Support fruiting with potassium as needed.' }
    ]
  },
  'Lemon_Melanose': {
    plantName: 'Lemon',
    healthStatus: 'Fungal leaf/fruit issue — Manage',
    tips: [
      { icon: '🧹', text: 'Remove dead twigs and rough bark pieces.' },
      { icon: '🌬️', text: 'Keep canopy airy to dry quickly.' },
      { icon: '💧', text: 'Avoid wet foliage from sprinklers.' }
    ]
  },
  'Lettuce_Bacterial': {
    plantName: 'Lettuce',
    healthStatus: 'Bacterial leaf spot — Act soon',
    tips: [
      { icon: '💧', text: 'Water at the base; keep leaves dry.' },
      { icon: '🌬️', text: 'Increase spacing to reduce humidity.' },
      { icon: '🧹', text: 'Remove affected leaves promptly.' }
    ]
  },
  'LettuceـHealthy': {
    plantName: 'Lettuce',
    healthStatus: 'Healthy — Cool-season care',
    tips: [
      { icon: '🌡️', text: 'Grow in mild temperatures if possible.' },
      { icon: '💧', text: 'Keep soil evenly moist; avoid soaking leaves.' },
      { icon: '🌬️', text: 'Provide airflow to prevent leaf diseases.' }
    ]
  },
  'LettuceـShepherd_purse_weeds': {
    plantName: 'Lettuce',
    healthStatus: 'Weed competition — Manage',
    tips: [
      { icon: '🧹', text: 'Hand-weed early and often.' },
      { icon: '🌱', text: 'Use mulch to suppress seed germination.' },
      { icon: '🚫', text: 'Prevent bringing in contaminated soil.' }
    ]
  },
  'Orange_Haunglongbing_(Citrus_greening)': {
    plantName: 'Orange',
    healthStatus: 'Citrus greening — Immediate action',
    tips: [
      { icon: '🔍', text: 'Monitor for persistent yellow mottling.' },
      { icon: '🧹', text: 'Remove severely affected plants if needed.' },
      { icon: '🌱', text: 'Use healthy planting stock and monitor regularly.' }
    ]
  },
  'Peach_Bacterial_spot': {
    plantName: 'Peach',
    healthStatus: 'Bacterial leaf/fruit spot — Act soon',
    tips: [
      { icon: '💧', text: 'Avoid leaf wetness; water at soil level.' },
      { icon: '🧹', text: 'Remove marked leaves/fruit to limit spread.' },
      { icon: '🌬️', text: 'Improve airflow with light thinning.' }
    ]
  },
  'Peach_healthy': {
    plantName: 'Peach',
    healthStatus: 'Healthy — Routine care',
    tips: [
      { icon: '☀️', text: 'Grow in full sun for best fruiting.' },
      { icon: '💧', text: 'Provide deep watering during fruit set.' },
      { icon: '✂️', text: 'Maintain an open center canopy.' }
    ]
  },
  'Pepper_bell_Bacterial_spot': {
    plantName: 'Pepper (Bell)',
    healthStatus: 'Bacterial leaf/fruit spot — Act soon',
    tips: [
      { icon: '💧', text: 'Use drip irrigation; keep leaves dry.' },
      { icon: '🧹', text: 'Remove badly spotted leaves/fruit.' },
      { icon: '🌬️', text: 'Increase spacing to reduce humidity.' }
    ]
  },
  'Pepper_bell_healthy': {
    plantName: 'Pepper (Bell)',
    healthStatus: 'Healthy — Routine care',
    tips: [
      { icon: '🌡️', text: 'Keep warm conditions for steady growth.' },
      { icon: '💧', text: 'Water evenly to prevent stress.' },
      { icon: '🧪', text: 'Provide balanced nutrients during flowering.' }
    ]
  },
  'Potato_Early_blight': {
    plantName: 'Potato',
    healthStatus: 'Fungal blight — Act soon',
    tips: [
      { icon: '🌬️', text: 'Avoid dense foliage; promote airflow.' },
      { icon: '🧹', text: 'Remove lower leaves touching soil.' },
      { icon: '💧', text: 'Water early so plants dry quickly.' }
    ]
  },
  'Potato_Late_blight': {
    plantName: 'Potato',
    healthStatus: 'Severe blight — Immediate action',
    tips: [
      { icon: '🧹', text: 'Remove heavily affected plants promptly.' },
      { icon: '🌬️', text: 'Keep canopy open for fast drying.' },
      { icon: '💧', text: 'Avoid overhead watering entirely.' }
    ]
  },
  'Potato_healthy': {
    plantName: 'Potato',
    healthStatus: 'Healthy — Tuber care',
    tips: [
      { icon: '🌱', text: 'Hill soil to cover developing tubers.' },
      { icon: '💧', text: 'Maintain steady moisture while bulking.' },
      { icon: '🧪', text: 'Support with potassium and calcium as needed.' }
    ]
  },
  'Powdery_mildew_on_lettuce': {
    plantName: 'Lettuce',
    healthStatus: 'Powdery mildew — Manage',
    tips: [
      { icon: '🌬️', text: 'Increase airflow and reduce humidity.' },
      { icon: '💧', text: 'Avoid wetting leaves when irrigating.' },
      { icon: '🧹', text: 'Remove heavily affected foliage.' }
    ]
  },
  'Septoria_blight_on_lettuce': {
    plantName: 'Lettuce',
    healthStatus: 'Fungal leaf spot — Act soon',
    tips: [
      { icon: '💧', text: 'Water at base; keep foliage dry.' },
      { icon: '🧹', text: 'Clear infected leaves to slow spread.' },
      { icon: '🌬️', text: 'Provide spacing for fast drying.' }
    ]
  },
  'Soybean___healthy': {
    plantName: 'Soybean',
    healthStatus: 'Healthy — Routine care',
    tips: [
      { icon: '🌱', text: 'Use good spacing for air movement.' },
      { icon: '💧', text: 'Water evenly during flowering/pod fill.' },
      { icon: '🪲', text: 'Check for sap-sucking pests regularly.' }
    ]
  },
  'Squash_Powdery_mildew': {
    plantName: 'Squash',
    healthStatus: 'Powdery mildew — Manage',
    tips: [
      { icon: '🪜', text: 'Train vines and reduce shading.' },
      { icon: '💧', text: 'Keep leaves dry; water soil only.' },
      { icon: '🌬️', text: 'Encourage airflow through spacing.' }
    ]
  },
  'Strawberry_Leaf_scorch': {
    plantName: 'Strawberry',
    healthStatus: 'Leaf scorch — Manage',
    tips: [
      { icon: '💧', text: 'Maintain steady moisture; avoid stress.' },
      { icon: '🧹', text: 'Remove oldest, most damaged leaves.' },
      { icon: '☀️', text: 'Provide sun; use straw mulch to keep fruit clean.' }
    ]
  },
  'Strawberry_healthy': {
    plantName: 'Strawberry',
    healthStatus: 'Healthy — Bed care',
    tips: [
      { icon: '🛏️', text: 'Use raised beds and clean mulch.' },
      { icon: '💧', text: 'Water evenly; avoid splashing.' },
      { icon: '🧪', text: 'Light feeding during fruiting as needed.' }
    ]
  },
  'Tomato_Bacterial_spot': {
    plantName: 'Tomato',
    healthStatus: 'Bacterial leaf/fruit spot — Act soon',
    tips: [
      { icon: '💧', text: 'Irrigate at soil level; avoid wet foliage.' },
      { icon: '🧹', text: 'Remove spotted leaves to limit spread.' },
      { icon: '🌬️', text: 'Increase airflow with staking/spacing.' }
    ]
  },
  'Tomato_Early_blight': {
    plantName: 'Tomato',
    healthStatus: 'Fungal blight — Act soon',
    tips: [
      { icon: '🪜', text: 'Stake/trellis to keep leaves off soil.' },
      { icon: '🧹', text: 'Remove lower yellowing leaves.' },
      { icon: '💧', text: 'Water in morning; keep foliage dry at night.' }
    ]
  },
  'Tomato_Late_blight': {
    plantName: 'Tomato',
    healthStatus: 'Severe blight — Immediate action',
    tips: [
      { icon: '🧹', text: 'Remove severely affected plants quickly.' },
      { icon: '🌬️', text: 'Maximize airflow to dry foliage fast.' },
      { icon: '💧', text: 'Do not overhead-water during cool/humid periods.' }
    ]
  },
  'Tomato_Leaf_Mold': {
    plantName: 'Tomato',
    healthStatus: 'Leaf mold — Manage',
    tips: [
      { icon: '🌬️', text: 'Vent warm, humid spaces (e.g., greenhouses).' },
      { icon: '💧', text: 'Water early; avoid wetting leaves.' },
      { icon: '🧹', text: 'Remove heavily affected leaves.' }
    ]
  },
  'Tomato_Septoria_leaf_spot': {
    plantName: 'Tomato',
    healthStatus: 'Fungal leaf spot — Act soon',
    tips: [
      { icon: '🧹', text: 'Prune off lower spotted leaves.' },
      { icon: '🪜', text: 'Keep plants tied and off the ground.' },
      { icon: '💧', text: 'Irrigate at soil level only.' }
    ]
  },
  'Tomato_Spider_mites_Two_spotted_spider_mite': {
    plantName: 'Tomato',
    healthStatus: 'Spider mites — Pest issue (Manage)',
    tips: [
      { icon: '🚿', text: 'Spray undersides of leaves with water stream.' },
      { icon: '🌬️', text: 'Reduce heat stress; increase airflow.' },
      { icon: '🧹', text: 'Remove heavily webbed leaves if needed.' }
    ]
  },
  'Tomato_Target_Spot': {
    plantName: 'Tomato',
    healthStatus: 'Fungal leaf/fruit spots — Act soon',
    tips: [
      { icon: '🧹', text: 'Clear affected lower leaves promptly.' },
      { icon: '🪜', text: 'Support plants to keep foliage dry.' },
      { icon: '💧', text: 'Water early; avoid wetting foliage.' }
    ]
  },
  'Tomato_Yellow_Leaf_Curl_Virus': {
    plantName: 'Tomato',
    healthStatus: 'Viral disease — Immediate action',
    tips: [
      { icon: '🧹', text: 'Remove severely stunted/curled plants.' },
      { icon: '🪲', text: 'Reduce whitefly activity around plants.' },
      { icon: '🌱', text: 'Use clean, healthy transplants.' }
    ]
  },
  'Tomato_healthy': {
    plantName: 'Tomato',
    healthStatus: 'Healthy — Trellised care',
    tips: [
      { icon: '🪜', text: 'Stake/trellis to improve airflow.' },
      { icon: '💧', text: 'Keep moisture steady to prevent stress.' },
      { icon: '🧪', text: 'Support fruiting with calcium/potassium as needed.' }
    ]
  },
  'Tomato_mosaic_virus': {
    plantName: 'Tomato',
    healthStatus: 'Viral disease — Immediate action',
    tips: [
      { icon: '🧼', text: 'Wash hands/tools; avoid leaf handling.' },
      { icon: '🧹', text: 'Remove distorted, mottled plants.' },
      { icon: '🌱', text: 'Plant healthy seed/starts only.' }
    ]
  },
  'Watermelon_Downy_Mildew': {
    plantName: 'Watermelon',
    healthStatus: 'Downy mildew — Act soon',
    tips: [
      { icon: '🌬️', text: 'Train vines and open canopy.' },
      { icon: '💧', text: 'Water roots; keep foliage dry.' },
      { icon: '🧹', text: 'Remove lower leaves if heavily affected.' }
    ]
  },
  'Watermelon_Healthy': {
    plantName: 'Watermelon',
    healthStatus: 'Healthy — Routine care',
    tips: [
      { icon: '☀️', text: 'Full sun with warm, draining soil.' },
      { icon: '💧', text: 'Deep, even watering during fruit fill.' },
      { icon: '🍉', text: 'Keep beds clean and well-mulched.' }
    ]
  },
  'Watermelon_Mosaic_Virus': {
    plantName: 'Watermelon',
    healthStatus: 'Viral disease — Manage/remove',
    tips: [
      { icon: '🧹', text: 'Remove severely distorted plants.' },
      { icon: '🪲', text: 'Limit sap-sucking pests around vines.' },
      { icon: '🌱', text: 'Use healthy seed/starts only.' }
    ]
  },
  'Wilt_and_leaf_blight_on_lettuce': {
    plantName: 'Lettuce',
    healthStatus: 'Wilt/leaf blight — Diagnose & act',
    tips: [
      { icon: '🔍', text: 'Check roots, drainage, and moisture levels.' },
      { icon: '💧', text: 'Water steadily; avoid extremes.' },
      { icon: '🧹', text: 'Remove dead tissue to reduce stress.' }
    ]
  },
  'banana_Cordana_leaf_spot': {
    plantName: 'Banana',
    healthStatus: 'Fungal leaf spot — Manage',
    tips: [
      { icon: '🌬️', text: 'Improve ventilation around leaves.' },
      { icon: '🧹', text: 'Remove affected leaves and litter.' },
      { icon: '💧', text: 'Avoid persistent leaf wetness.' }
    ]
  },
  'banana_healthy': {
    plantName: 'Banana',
    healthStatus: 'Healthy — Tropical care',
    tips: [
      { icon: '💧', text: 'Provide generous, regular watering.' },
      { icon: '☀️', text: 'Grow in bright, warm conditions.' },
      { icon: '🧪', text: 'Support with potassium-rich feeding.' }
    ]
  },
  'banana_pestalotiopsis': {
    plantName: 'Banana',
    healthStatus: 'Fungal leaf spot — Act soon',
    tips: [
      { icon: '🧹', text: 'Clear damaged leaves promptly.' },
      { icon: '🌬️', text: 'Increase airflow; reduce shade.' },
      { icon: '💧', text: 'Water at soil level; avoid leaf wetness.' }
    ]
  },
  'banana_sigatoka': {
    plantName: 'Banana',
    healthStatus: 'Fungal leaf spot — Act soon',
    tips: [
      { icon: '🌬️', text: 'Thin plants to lower humidity.' },
      { icon: '🧹', text: 'Remove heavily marked leaves.' },
      { icon: '💧', text: 'Irrigate early and avoid splashing.' }
    ]
  },
  'bean_angular_leaf_spot': {
    plantName: 'Bean',
    healthStatus: 'Fungal leaf spot — Manage',
    tips: [
      { icon: '💧', text: 'Use drip; keep leaves dry.' },
      { icon: '🧹', text: 'Remove infected foliage promptly.' },
      { icon: '🌬️', text: 'Provide spacing for airflow.' }
    ]
  },
  'bean_healthy': {
    plantName: 'Bean',
    healthStatus: 'Healthy — Routine care',
    tips: [
      { icon: '🌱', text: 'Support climbing types; space well.' },
      { icon: '💧', text: 'Water evenly during flowering.' },
      { icon: '🪲', text: 'Check leaves for chewing/sucking pests.' }
    ]
  },
  'bean_rust': {
    plantName: 'Bean',
    healthStatus: 'Fungal rust — Act soon',
    tips: [
      { icon: '🌬️', text: 'Reduce humidity with good spacing.' },
      { icon: '🧹', text: 'Remove pustule-covered leaves.' },
      { icon: '💧', text: 'Water soil; avoid wet foliage.' }
    ]
  },
  'chili_Bacterial_Spot': {
    plantName: 'Chili',
    healthStatus: 'Bacterial leaf/fruit spot — Act soon',
    tips: [
      { icon: '💧', text: 'Irrigate at base; keep leaves dry.' },
      { icon: '🧹', text: 'Remove spotted tissues promptly.' },
      { icon: '🌬️', text: 'Increase airflow around plants.' }
    ]
  },
  'chili_Cercospora_Leaf_Spot': {
    plantName: 'Chili',
    healthStatus: 'Fungal leaf spot — Manage',
    tips: [
      { icon: '🌬️', text: 'Avoid overcrowding; improve airflow.' },
      { icon: '🧹', text: 'Clear affected leaves and debris.' },
      { icon: '💧', text: 'Water early; keep foliage dry.' }
    ]
  },
  'chili_Curl_Virus': {
    plantName: 'Chili',
    healthStatus: 'Viral leaf curl — Immediate action',
    tips: [
      { icon: '🧹', text: 'Remove severely curled, stunted plants.' },
      { icon: '🪲', text: 'Limit sap-sucking insects nearby.' },
      { icon: '🌱', text: 'Plant healthy starts; monitor regularly.' }
    ]
  },
  'chili_Healthy': {
    plantName: 'Chili',
    healthStatus: 'Healthy — Routine care',
    tips: [
      { icon: '🌡️', text: 'Keep warm, stable temperatures.' },
      { icon: '💧', text: 'Water steadily; avoid drought stress.' },
      { icon: '🧪', text: 'Provide balanced nutrients during fruiting.' }
    ]
  },
  'chili_Nutrition_Deficiency': {
    plantName: 'Chili',
    healthStatus: 'Nutrient deficiency — Correct',
    tips: [
      { icon: '🧪', text: 'Ensure balanced N-P-K and micronutrients.' },
      { icon: '💧', text: 'Maintain steady moisture for uptake.' },
      { icon: '🌡️', text: 'Reduce heat/cold stress on plants.' }
    ]
  },
  'chili_White_spot': {
    plantName: 'Chili',
    healthStatus: 'Leaf/fruit spots — Manage',
    tips: [
      { icon: '💧', text: 'Avoid wet foliage; water soil only.' },
      { icon: '🧹', text: 'Prune out heavily spotted areas.' },
      { icon: '🌬️', text: 'Increase airflow to speed drying.' }
    ]
  },
  'olive_Healthy': {
    plantName: 'Olive',
    healthStatus: 'Healthy — Mediterranean care',
    tips: [
      { icon: '☀️', text: 'Full sun with sharp drainage.' },
      { icon: '✂️', text: 'Light annual pruning to open canopy.' },
      { icon: '🪲', text: 'Monitor fruit fly/pests seasonally.' }
    ]
  },
  'olive_aculus_olearius': {
    plantName: 'Olive',
    healthStatus: 'Mite damage — Manage',
    tips: [
      { icon: '🔍', text: 'Inspect new leaves for distortion.' },
      { icon: '🌬️', text: 'Reduce dust and improve vigor.' },
      { icon: '🧹', text: 'Remove badly affected growth.' }
    ]
  },
  'olive_peacock_spot': {
    plantName: 'Olive',
    healthStatus: 'Fungal leaf spot — Act soon',
    tips: [
      { icon: '🌬️', text: 'Open canopy for faster drying.' },
      { icon: '💧', text: 'Avoid wetting leaves during irrigation.' },
      { icon: '🧹', text: 'Remove heavily spotted leaves.' }
    ]
  },
  'plam_Black_Scorch': {
    plantName: 'Palm',
    healthStatus: 'Fungal lesion — Act soon',
    tips: [
      { icon: '✂️', text: 'Trim out dead/dark tissue carefully.' },
      { icon: '🧼', text: 'Sanitize tools between cuts.' },
      { icon: '💧', text: 'Keep base area clean and well-drained.' }
    ]
  },
  'plam_Fusarium_Wilt': {
    plantName: 'Palm',
    healthStatus: 'Vascular wilt — Immediate action',
    tips: [
      { icon: '🧹', text: 'Remove severely affected palms if needed.' },
      { icon: '🧼', text: 'Disinfect tools to avoid spread.' },
      { icon: '🌱', text: 'Use healthy planting material only.' }
    ]
  },
  'plam_Healthy': {
    plantName: 'Palm',
    healthStatus: 'Healthy — Date palm care',
    tips: [
      { icon: '☀️', text: 'Provide full sun and good drainage.' },
      { icon: '💧', text: 'Deep, occasional watering as needed.' },
      { icon: '🧪', text: 'Maintain balanced nutrients, esp. K/Mg.' }
    ]
  },
  'plam_Leaf_Spots': {
    plantName: 'Palm',
    healthStatus: 'Leaf spots — Manage',
    tips: [
      { icon: '💧', text: 'Water soil; avoid leaf wetness.' },
      { icon: '🧹', text: 'Remove most affected fronds.' },
      { icon: '🌬️', text: 'Increase airflow around canopy.' }
    ]
  },
  'plam_Magnesium_Deficiency': {
    plantName: 'Palm',
    healthStatus: 'Magnesium deficiency — Correct',
    tips: [
      { icon: '🧪', text: 'Supplement with magnesium as needed.' },
      { icon: '💧', text: 'Keep moisture steady for uptake.' },
      { icon: '🌡️', text: 'Reduce salt/heat stress when possible.' }
    ]
  },
  'plam_Manganese_Deficiency': {
    plantName: 'Palm',
    healthStatus: 'Manganese deficiency — Correct',
    tips: [
      { icon: '🧪', text: 'Provide manganese through soil/foliar feed.' },
      { icon: '💧', text: 'Avoid waterlogging or drought.' },
      { icon: '🌱', text: 'Maintain suitable soil pH for uptake.' }
    ]
  },
  'plam_Parlatoria_Blanchardi': {
    plantName: 'Palm',
    healthStatus: 'Scale insects — Manage',
    tips: [
      { icon: '🔍', text: 'Inspect fronds and midribs regularly.' },
      { icon: '🧹', text: 'Remove heavily infested fronds.' },
      { icon: '🪲', text: 'Encourage natural enemies when possible.' }
    ]
  },
  'plam_Potassium_Deficiency': {
    plantName: 'Palm',
    healthStatus: 'Potassium deficiency — Correct',
    tips: [
      { icon: '🧪', text: 'Use potassium-rich fertilizer as needed.' },
      { icon: '💧', text: 'Water consistently to aid uptake.' },
      { icon: '✂️', text: 'Avoid over-removing healthy green fronds.' }
    ]
  },
  'plam_Rachis_Blight': {
    plantName: 'Palm',
    healthStatus: 'Fungal blight — Act soon',
    tips: [
      { icon: '✂️', text: 'Trim out dry, damaged fronds.' },
      { icon: '🧼', text: 'Sanitize tools; keep cuts clean.' },
      { icon: '💧', text: 'Promote drainage; avoid injuries.' }
    ]
  },
  'plam_infected_by_Bug': {
    plantName: 'Palm',
    healthStatus: 'General pest damage — Manage',
    tips: [
      { icon: '🔍', text: 'Identify pest signs on fronds and crown.' },
      { icon: '🧹', text: 'Remove most damaged parts if safe.' },
      { icon: '🌬️', text: 'Keep trees vigorous with airflow and care.' }
    ]
  },
  'plam_infected_by_Dubas': {
    plantName: 'Palm',
    healthStatus: 'Sap-feeding bugs — Manage',
    tips: [
      { icon: '🔍', text: 'Watch for honeydew and sooty mold.' },
      { icon: '🧹', text: 'Clean fronds to reduce sooty buildup.' },
      { icon: '🌬️', text: 'Improve vigor with airflow and hygiene.' }
    ]
  },
  'rice_Bacterial_leaf_blight': {
    plantName: 'Rice',
    healthStatus: 'Bacterial leaf blight — Act soon',
    tips: [
      { icon: '💧', text: 'Manage water to reduce leaf wetness.' },
      { icon: '🧹', text: 'Remove affected leaves when practical.' },
      { icon: '🌬️', text: 'Promote airflow by proper spacing.' }
    ]
  },
  'rice_Brown_spot': {
    plantName: 'Rice',
    healthStatus: 'Leaf spots — Manage',
    tips: [
      { icon: '🧪', text: 'Maintain balanced nutrition for foliage.' },
      { icon: '💧', text: 'Avoid prolonged standing water on leaves.' },
      { icon: '🧹', text: 'Keep fields clean from plant debris.' }
    ]
  },
  'rice_Leaf_smut': {
    plantName: 'Rice',
    healthStatus: 'Fungal leaf issue — Manage',
    tips: [
      { icon: '🌬️', text: 'Reduce humidity with good spacing.' },
      { icon: '💧', text: 'Irrigate early; dry leaves by evening.' },
      { icon: '🧹', text: 'Remove heavily affected foliage.' }
    ]
  },
  'wheat_leaf_brown_rust': {
    plantName: 'Wheat',
    healthStatus: 'Leaf/brown rust — Act soon',
    tips: [
      { icon: '🌾', text: 'Use proper spacing and monitor early.' },
      { icon: '🧹', text: 'Remove volunteer plants and debris.' },
      { icon: '🌬️', text: 'Encourage airflow across rows.' }
    ]
  },
  'wheat_stem_black_rust': {
    plantName: 'Wheat',
    healthStatus: 'Stem/black rust — Immediate action',
    tips: [
      { icon: '🧹', text: 'Remove severely affected patches if feasible.' },
      { icon: '🌬️', text: 'Reduce canopy humidity with spacing.' },
      { icon: '💧', text: 'Water early in the day to dry foliage.' }
    ]
  },
  'wheat_strip_yellowrust': {
    plantName: 'Wheat',
    healthStatus: 'Stripe/yellow rust — Act soon',
    tips: [
      { icon: '🌬️', text: 'Increase airflow; avoid dense stands.' },
      { icon: '🧹', text: 'Clean up residues after harvest.' },
      { icon: '💧', text: 'Irrigate to avoid prolonged leaf wetness.' }]}
};

// قائمة الكلاسات (لازم تكون بنفس ترتيب المودل)
const modelClasses = [
  "Apple_Apple_scab",
  "Apple_Black_rot",
  "Apple_Cedar_apple_rust",
  "Apple_healthy",
  "Blueberry_healthy",
  "Cherry_Powdery_mildew",
  "Cherry_healthy",
  "Corn_Cercospora_leaf_spot Gray_leaf_spot",
  "Corn_Common_rust_",
  "Corn_Northern_Leaf_Blight",
  "Corn_healthy",
  "Cucumber ـBacterialـWilt",
  "Cucumber_Gummy_Stem_Blight",
  "Cucumber_Pythium_Fruit_Rot",
  "CucumberـAnthracnose",
  "CucumberـBelly Rot",
  "CucumberـDownyـMildew",
  "Cucumberـhealthy",
  "Downy_mildew_on_lettuce",
  "Grape_Black_rot",
  "Grape_Esca_(Black_Measles)",
  "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
  "Grape_healthy",
  "Lemon_Anthracnose",
  "Lemon_Black_Spot",
  "Lemon_Citrus_Canker",
  "Lemon_Citrus_Leaf_Miner",
  "Lemon_Curl_Leaf",
  "Lemon_Dry_leaf",
  "Lemon_Greening",
  "Lemon_Healthy",
  "Lemon_Melanose",
  "Lettuce_Bacterial",
  "LettuceـHealthy",
  "LettuceـShepherd_purse_weeds",
  "Orange_Haunglongbing_(Citrus_greening)",
  "Peach_Bacterial_spot",
  "Peach_healthy",
  "Pepper_bell_Bacterial_spot",
  "Pepper_bell_healthy",
  "Potato_Early_blight",
  "Potato_Late_blight",
  "Potato_healthy",
  "Powdery_mildew_on_lettuce",
  "Septoria_blight_on_lettuce",
  "Soybean___healthy",
  "Squash_Powdery_mildew",
  "Strawberry_Leaf_scorch",
  "Strawberry_healthy",
  "Tomato_Bacterial_spot",
  "Tomato_Early_blight",
  "Tomato_Late_blight",
  "Tomato_Leaf_Mold",
  "Tomato_Septoria_leaf_spot",
  "Tomato_Spider_mites_Two_spotted_spider_mite",
  "Tomato_Target_Spot",
  "Tomato_Yellow_Leaf_Curl_Virus",
  "Tomato_healthy",
  "Tomato_mosaic_virus",
  "Watermelon_Downy_Mildew",
  "Watermelon_Healthy",
  "Watermelon_Mosaic_Virus",
  "Wilt_and_leaf_blight_on_lettuce",
  "banana_Cordana_leaf_spot",
  "banana_healthy",
  "banana_pestalotiopsis",
  "banana_sigatoka",
  "bean_angular_leaf_spot",
  "bean_healthy",
  "bean_rust",
  "chili_Bacterial_Spot",
  "chili_Cercospora_Leaf_Spot",
  "chili_Curl_Virus",
  "chili_Healthy",
  "chili_Nutrition_Deficiency",
  "chili_White_spot",
  "olive_Healthy",
  "olive_aculus_olearius",
  "olive_peacock_spot",
  "plam_Black_Scorch",
  "plam_Fusarium_Wilt",
  "plam_Healthy",
  "plam_Leaf_Spots",
  "plam_Magnesium_Deficiency",
  "plam_Manganese_Deficiency",
  "plam_Parlatoria_Blanchardi",
  "plam_Potassium_Deficiency",
  "plam_Rachis_Blight",
  "plam_infected_by_Bug",
  "plam_infected_by_Dubas",
  "rice_Bacterial_leaf_blight",
  "rice_Brown_spot",
  "rice_Leaf_smut",
  "wheat_leaf_brown_rust",
  "wheat_stem_black_rust",
  "wheat_strip_yellowrust"];

// تحميل المودل
let model = null;

async function loadModel() {
    try {
        console.log('Loading model...');
        model = await tf.loadLayersModel('model_tfjs/model.json');
        console.log('✅ Model loaded successfully!');
        return true;
    } catch (error) {
        console.error('❌ Error loading model:', error);
        alert('Failed to load AI model. Please make sure model files are in the correct location.');
        return false;
    }
}

// معالجة الصورة
function preprocessImage(imageElement) {
    return tf.tidy(() => {
        let tensor = tf.browser.fromPixels(imageElement);
        const targetSize = 224;
        tensor = tf.image.resizeBilinear(tensor, [targetSize, targetSize]);
        tensor = tensor.div(255.0);
        tensor = tensor.expandDims(0);
        return tensor;
    });
}

// التنبؤ
async function predictPlant(imageElement) {
    if (!model) {
        const loaded = await loadModel();
        if (!loaded) {
            return {
                plantName: 'Error',
                healthStatus: 'Model not loaded',
                confidence: '0%',
                tips: [
                    { icon: '⚠️', text: 'Unable to analyze. Please refresh the page.' }
                ]
            };
        }
    }
    
    try {
        const processedImage = preprocessImage(imageElement);
        const predictions = await model.predict(processedImage).data();
        const maxIndex = Array.from(predictions).indexOf(Math.max(...predictions));
        const confidence = (predictions[maxIndex] * 100).toFixed(1);
        const predictedClass = modelClasses[maxIndex];
        
        const careInfo = plantCareData[predictedClass] || {
            plantName: predictedClass.split('___')[0].replace(/_/g, ' '),
            healthStatus: predictedClass.split('___')[1].replace(/_/g, ' '),
            tips: [
                { icon: '💡', text: 'Care information for this plant is being updated' },
                { icon: '📚', text: 'Please consult a plant specialist for specific care' }
            ]
        };
        
        return {
            ...careInfo,
            confidence: confidence + '%'
        };
        
    } catch (error) {
        console.error('Prediction error:', error);
        return {
            plantName: 'Error',
            healthStatus: 'Analysis failed',
            confidence: '0%',
            tips: [
                { icon: '⚠️', text: 'Something went wrong. Please try again.' }
            ]
        };
    }
}

// ==================== MOUSE TRACKER ====================
const tracker = document.getElementById('tracker');
let mouseX = 0, mouseY = 0;
let trackerX = 0, trackerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateTracker() {
    const dx = mouseX - trackerX;
    const dy = mouseY - trackerY;
    
    trackerX += dx * 0.1;
    trackerY += dy * 0.1;
    
    tracker.style.left = trackerX + 'px';
    tracker.style.top = trackerY + 'px';
    
    requestAnimationFrame(animateTracker);
}

animateTracker();

// ==================== PARTICLES ====================
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 5) + 's';
        particlesContainer.appendChild(particle);
    }
    
    document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;
            
            const dx = e.clientX - particleX;
            const dy = e.clientY - particleY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                const force = (150 - distance) / 150;
                const moveX = -(dx / distance) * force * 30;
                const moveY = -(dy / distance) * force * 30;
                
                particle.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.5})`;
                particle.style.opacity = 1;
            } else {
                particle.style.transform = 'translate(0, 0) scale(1)';
                particle.style.opacity = 0.6;
            }
        });
    });
}

// ==================== FILE UPLOAD ====================
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const previewContainer = document.getElementById('previewContainer');
const imagePreview = document.getElementById('imagePreview');
const analyzeBtn = document.getElementById('analyzeBtn');
const loading = document.getElementById('loading');
const resultsContainer = document.getElementById('resultsContainer');
const resetBtn = document.getElementById('resetBtn');

// تحميل المودل عند فتح الصفحة
if (uploadArea && fileInput) {
    loadModel();
}

if (uploadArea && fileInput) {
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#457b67';
        uploadArea.style.transform = 'scale(1.02)';
    });

    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        uploadArea.style.transform = '';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        uploadArea.style.transform = '';
        
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            displayImage(file);
        }
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            displayImage(file);
        }
    });

    function displayImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            
            uploadArea.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            uploadArea.style.transform = 'scale(0.95)';
            uploadArea.style.opacity = '0';
            
            setTimeout(() => {
                uploadArea.style.display = 'none';
                previewContainer.style.opacity = '0';
                previewContainer.style.transform = 'scale(0.95)';
                previewContainer.classList.add('active');
                
                setTimeout(() => {
                    previewContainer.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    previewContainer.style.opacity = '1';
                    previewContainer.style.transform = 'scale(1)';
                }, 50);
            }, 300);
        };
        reader.readAsDataURL(file);
    }

    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', () => {
            previewContainer.style.transition = 'all 0.4s ease';
            previewContainer.style.opacity = '0';
            previewContainer.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                previewContainer.style.display = 'none';
                loading.classList.add('active');
                loading.style.opacity = '0';
                loading.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    loading.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    loading.style.opacity = '1';
                    loading.style.transform = 'scale(1)';
                }, 50);
            }, 300);

            // استخدام المودل الحقيقي
            predictPlant(imagePreview).then(results => {
                setTimeout(() => {
                    loading.style.opacity = '0';
                    loading.style.transform = 'scale(0.95)';
                    
                    setTimeout(() => {
                        loading.classList.remove('active');
                        resultsContainer.style.opacity = '0';
                        resultsContainer.style.transform = 'translateY(30px)';
                        resultsContainer.classList.add('active');
                        resetBtn.classList.add('active');
                        
                        setTimeout(() => {
                            resultsContainer.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                            resultsContainer.style.opacity = '1';
                            resultsContainer.style.transform = 'translateY(0)';
                        }, 50);

                        setTimeout(() => {
                            document.getElementById('plantName').textContent = results.plantName;
                        }, 200);
                        setTimeout(() => {
                            document.getElementById('healthStatus').textContent = results.healthStatus;
                        }, 400);
                        setTimeout(() => {
                            document.getElementById('confidence').textContent = results.confidence;
                        }, 600);
                        
                        setTimeout(() => {
                            const tipsList = document.querySelector('.recommendations-list');
                            tipsList.innerHTML = '';
                            
                            results.tips.forEach((tip, index) => {
                                setTimeout(() => {
                                    const tipItem = document.createElement('div');
                                    tipItem.className = 'tip-item';
                                    tipItem.style.opacity = '0';
                                    tipItem.style.transform = 'translateX(-20px)';
                                    tipItem.innerHTML = `
                                        <span class="tip-icon">${tip.icon}</span>
                                        <span>${tip.text}</span>
                                    `;
                                    tipsList.appendChild(tipItem);
                                    
                                    setTimeout(() => {
                                        tipItem.style.transition = 'all 0.5s ease';
                                        tipItem.style.opacity = '1';
                                        tipItem.style.transform = 'translateX(0)';
                                    }, 50);
                                }, index * 150);
                            });
                        }, 800);
                        
                        if (results.healthStatus.toLowerCase().includes('healthy')) {
                            setTimeout(() => {
                                createConfetti();
                            }, 1000);
                        }
                    }, 400);
                }, 1500);
            });
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            resultsContainer.style.transition = 'all 0.4s ease';
            resultsContainer.style.opacity = '0';
            resultsContainer.style.transform = 'translateY(-30px)';
            
            setTimeout(() => {
                fileInput.value = '';
                imagePreview.src = '';
                previewContainer.classList.remove('active');
                resultsContainer.classList.remove('active');
                resetBtn.classList.remove('active');
                loading.classList.remove('active');
                
                uploadArea.style.display = 'block';
                uploadArea.style.opacity = '0';
                uploadArea.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    uploadArea.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    uploadArea.style.opacity = '1';
                    uploadArea.style.transform = 'scale(1)';
                }, 50);
            }, 400);
        });
    }
}

// ==================== MAGNETIC BUTTON EFFECT ====================
function addMagneticEffect(button) {
    if (!button) return;
    
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const moveX = x * 0.15;
        const moveY = y * 0.15;
        
        button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0) scale(1)';
    });
}

if (analyzeBtn) addMagneticEffect(analyzeBtn);
if (resetBtn) addMagneticEffect(resetBtn);

// ==================== 3D TILT EFFECT ====================
const cards = document.querySelectorAll('.result-card, .about-card, .feature-card-detailed');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
    });
});

// ==================== CURSOR TRAIL ====================
let cursorTrail = [];
const trailLength = 8;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
    
    drawCursorTrail();
});

function drawCursorTrail() {
    const existingTrails = document.querySelectorAll('.cursor-trail');
    existingTrails.forEach(trail => trail.remove());
    
    cursorTrail.forEach((point, index) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            width: ${12 - index}px;
            height: ${12 - index}px;
            background: radial-gradient(circle, rgba(139, 195, 174, ${0.6 - index * 0.08}), transparent);
            border-radius: 50%;
            pointer-events: none;
            left: ${point.x}px;
            top: ${point.y}px;
            transform: translate(-50%, -50%);
            z-index: 9999;
            animation: trailFade 0.5s ease-out forwards;
        `;
        document.body.appendChild(trail);
    });
}

// ==================== CLICK RIPPLE ====================
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.cssText = `
        position: fixed;
        width: 30px;
        height: 30px;
        border: 3px solid rgba(139, 195, 174, 0.8);
        border-radius: 50%;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        animation: rippleExpand 0.8s ease-out forwards;
    `;
    document.body.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 800);
});

// ==================== SCROLL EFFECTS ====================
let scrollTimeout;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
    const hue = 150 + (scrollPercent * 30);
    header.style.backdropFilter = `blur(30px) saturate(180%) hue-rotate(${hue - 150}deg)`;
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        header.style.backdropFilter = 'blur(30px) saturate(180%)';
    }, 150);
});

// ==================== PARALLAX ====================
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        heroSection.style.transform = `translate3d(0, ${rate}px, 0)`;
        heroSection.style.opacity = 1 - (scrolled / 500);
    });
}

// ==================== TEXT GLOW ====================
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    heroTitle.addEventListener('mousemove', (e) => {
        const rect = heroTitle.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        heroTitle.style.textShadow = `
            ${x / 10}px ${y / 10}px 20px rgba(139, 195, 174, 0.5),
            ${x / 5}px ${y / 5}px 40px rgba(69, 123, 103, 0.3)
        `;
    });
    
    heroTitle.addEventListener('mouseleave', () => {
        heroTitle.style.textShadow = 'none';
    });
}

// ==================== CONFETTI ====================
function createConfetti() {
    const colors = ['#8BC3AE', '#a3b18a', '#457b67', '#91a68d'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -20px;
            opacity: ${Math.random()};
            transform: rotate(${Math.random() * 360}deg);
            pointer-events: none;
            z-index: 9999;
            animation: confettiFall ${2 + Math.random() * 2}s linear forwards;
        `;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

// ==================== NAVIGATION ====================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.about-card, .feature-card-detailed, .result-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});