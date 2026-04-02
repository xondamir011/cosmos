const InfoPanel = ({ planetName }) => {
    
  const planetInfo = {
    'Quyosh': {
      description: 'Quyosh tizimimizning markazi va eng katta yulduzi',
      emoji: '☀️'
    },
    'Merkuriy': {
      description: 'Quyoshga eng yaqin va eng kichik sayyora',
      emoji: '☿'
    },
    'Venera': {
      description: 'Eng issiq sayyora, atmosferasi CO₂ bilan to\'lgan',
      emoji: '♀'
    },
    'Yer': {
      description: 'Bizning uyimiz, hayot mavjud yagona sayyora',
      emoji: '🌍'
    },
    'Mars': {
      description: 'Qizil sayyora, kelajakda kolonizatsiya rejalari bor',
      emoji: '⭕'
    },
    'Yupiter': {
      description: 'Eng katta gaz giganti, 79 ta yo\'ldoshi bor',
      emoji: '♃'
    },
    'Saturn': {
      description: 'Go\'zal halqalari bilan mashhur gaz giganti',
      emoji: '♄'
    },
    'Uran': {
      description: 'Yon tomonga egilgan, sovuq muz giganti',
      emoji: '♅'
    },
    'Neptun': {
      description: 'Eng uzoq sayyora, kuchli shamollar mavjud',
      emoji: '♆'
    },
     'Pluton': {
      description: 'Eng kichik sayyora, atrofida orbitalar mavjud',
      emoji: '♆'
    }
  };

  const info = planetInfo[planetName] || planetInfo['Quyosh'];

  return (
    <div className="absolute top-4 right-4 bg-gray-900 bg-opacity-90 text-white p-4 rounded-lg shadow-xl max-w-xs">
      <h3 className="font-bold mb-2 text-lg flex items-center gap-2">
        <span className="text-2xl">{info.emoji}</span>
        {planetName}
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed">
        {info.description}
      </p>
    </div>
  );
};

export default InfoPanel;