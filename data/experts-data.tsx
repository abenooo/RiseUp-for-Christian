export interface ExpertType {
  id: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  reviewCount: number;
  pricePerHour: 0;
  categories: string[];
  specialties: string[];
  sessionLength: number;
  successRate: number;
  location: string;
  experience: number;
  verified: boolean;
  availableToday: boolean;
  sessionTypes: ('video' | 'chat' | 'in-person')[];
  bio: string;
  testimonials: {
    name: string;
    text: string;
    rating: number;
  }[];
}

export const expertData: ExpertType[] = [
  {
    id: '1',
    name: 'Pastor Dawit Kebede',
    title: 'Senior Pastor & Spiritual Director',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4.9,
    reviewCount: 127,
    pricePerHour: 0,
    categories: ['Pastoral Care', 'Discipleship'],
    specialties: ['Prayer Life', 'Biblical Counseling', 'Leadership Development'],
    sessionLength: 60,
    successRate: 96,
    location: 'Addis Ababa, Ethiopia',
    experience: 15,
    verified: true,
    availableToday: true,
    sessionTypes: ['video', 'chat'],
    bio: 'Helping believers in Ethiopia grow deeper in their relationship with Christ through prayer, scripture study, and spiritual disciplines.',
    testimonials: [
      {
        name: 'Mekdes T.',
        text: 'Pastor Dawit helped me develop a consistent prayer life that has transformed my walk with God.',
        rating: 5
      }
    ]
  },
  {
    id: '2',
    name: 'Dr. Selamawit Tesfaye',
    title: 'Christian Counselor & Author',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4.8,
    reviewCount: 89,
    pricePerHour: 0,
    categories: ['Christian Counseling', 'Women\'s Ministry'],
    specialties: ['Marriage & Family', 'Grief Support', 'Identity in Christ'],
    sessionLength: 50,
    successRate: 94,
    location: 'Bahir Dar, Ethiopia',
    experience: 12,
    verified: true,
    availableToday: false,
    sessionTypes: ['video', 'chat', 'in-person'],
    bio: 'Combining biblical wisdom with professional counseling to help Ethiopian families find healing and hope in Christ.',
    testimonials: [
      {
        name: 'Samuel A.',
        text: 'Dr. Selamawit guided our marriage through a difficult season with grace and biblical wisdom.',
        rating: 5
      }
    ]
  },
  {
    id: '3',
    name: 'Elder Getachew Alemu',
    title: 'Youth Pastor & Discipleship Coach',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 4.7,
    reviewCount: 156,
    pricePerHour: 0,
    categories: ['Youth Ministry', 'Discipleship'],
    specialties: ['Teen Mentorship', 'Bible Study', 'Spiritual Formation'],
    sessionLength: 45,
    successRate: 92,
    location: 'Hawassa, Ethiopia',
    experience: 8,
    verified: true,
    availableToday: true,
    sessionTypes: ['video', 'chat'],
    bio: 'Dedicated to helping young Ethiopians discover their purpose in Christ and develop strong spiritual foundations.',
    testimonials: [
      {
        name: 'Hanna L.',
        text: 'Elder Getachew helped my teenager navigate faith questions with patience and biblical truth.',
        rating: 5
      }
    ]
  },
  {
    id: '4',
    name: 'Sister Muluwork Abebe',
    title: 'Spiritual Director & Prayer Minister',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
    rating: 4.9,
    reviewCount: 203,
    pricePerHour: 0,
    categories: ['Spiritual Direction', 'Prayer Ministry'],
    specialties: ['Contemplative Prayer', 'Spiritual Discernment', 'Retreat Guidance'],
    sessionLength: 60,
    successRate: 98,
    location: 'Gondar, Ethiopia',
    experience: 20,
    verified: true,
    availableToday: true,
    sessionTypes: ['video', 'chat', 'in-person'],
    bio: 'Guiding souls in Ethiopia into deeper intimacy with God through contemplative prayer and spiritual direction.',
    testimonials: [
      {
        name: 'Abebe K.',
        text: 'Sister Muluwork helped me discover the beauty of contemplative prayer and silence with God.',
        rating: 5
      }
    ]
  },
  {
    id: '5',
    name: 'Rev. Daniel Tesfaye',
    title: 'Missionary & Cross-Cultural Minister',
    image: 'https://randomuser.me/api/portraits/men/48.jpg',
    rating: 4.8,
    reviewCount: 94,
    pricePerHour: 0,
    categories: ['Missions', 'Cross-Cultural Ministry'],
    specialties: ['Evangelism', 'Cultural Sensitivity', 'Ministry Training'],
    sessionLength: 55,
    successRate: 93,
    location: 'Mekelle, Ethiopia',
    experience: 18,
    verified: true,
    availableToday: false,
    sessionTypes: ['video', 'chat'],
    bio: 'Passionate about equipping believers for effective cross-cultural ministry and evangelism.',
    testimonials: [
      {
        name: 'Hirut S.',
        text: 'Rev. Daniel prepared me beautifully for my mission trip with practical and spiritual guidance.',
        rating: 5
      }
    ]
  },
  {
    id: '6',
    name: 'Dr. Ruth Alemayehu',
    title: 'Biblical Scholar & Teacher',
    image: 'https://randomuser.me/api/portraits/women/49.jpg',
    rating: 4.9,
    reviewCount: 167,
    pricePerHour: 0,
    categories: ['Biblical Studies', 'Teaching'],
    specialties: ['Old Testament', 'Hebrew Language', 'Biblical Archaeology'],
    sessionLength: 60,
    successRate: 97,
    location: 'Dire Dawa, Ethiopia',
    experience: 25,
    verified: true,
    availableToday: true,
    sessionTypes: ['video', 'chat'],
    bio: 'Bringing the ancient world of Scripture to life through scholarly insight and passionate teaching.',
    testimonials: [
      {
        name: 'Michael T.',
        text: 'Dr. Ruth opened up the Old Testament in ways I never imagined possible.',
        rating: 5
      }
    ]
  },
  {
    id: '7',
    name: 'Pastor Sara Bekele',
    title: 'Women\'s Ministry Leader',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
    rating: 4.8,
    reviewCount: 134,
    pricePerHour: 0,
    categories: ['Women\'s Ministry', 'Pastoral Care'],
    specialties: ['Women\'s Leadership', 'Life Transitions', 'Biblical Womanhood'],
    sessionLength: 50,
    successRate: 95,
    location: 'Jimma, Ethiopia',
    experience: 11,
    verified: true,
    availableToday: true,
    sessionTypes: ['video', 'chat', 'in-person'],
    bio: 'Empowering women to discover their God-given purpose and walk confidently in their calling.',
    testimonials: [
      {
        name: 'Lisa K.',
        text: 'Pastor Sara helped me navigate a difficult life transition with wisdom and compassion.',
        rating: 5
      }
    ]
  },
  {
    id: '8',
    name: 'Dr. Markos Fikru',
    title: 'Marriage & Family Counselor',
    image: 'https://randomuser.me/api/portraits/men/51.jpg',
    rating: 4.9,
    reviewCount: 178,
    pricePerHour: 0,
    categories: ['Marriage & Family', 'Christian Counseling'],
    specialties: ['Couples Therapy', 'Family Dynamics', 'Conflict Resolution'],
    sessionLength: 60,
    successRate: 97,
    location: 'Adama, Ethiopia',
    experience: 16,
    verified: true,
    availableToday: false,
    sessionTypes: ['video', 'in-person'],
    bio: 'Helping couples and families build strong, Christ-centered relationships through biblical counseling principles.',
    testimonials: [
      {
        name: 'John & Mary D.',
        text: 'Dr. Markos saved our marriage and taught us how to love each other the way Christ loves us.',
        rating: 5
      }
    ]
  }
];

export const featuredExpertsData = expertData.slice(0, 4);