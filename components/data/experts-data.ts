export interface ExpertType {
    id: string;
    name: string;
    title: string;
    image: string;
    rating: number;
    reviewCount: number;
    pricePerHour: number;
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
      name: 'Pastor Michael Chen',
      title: 'Senior Pastor & Spiritual Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      rating: 4.9,
      reviewCount: 127,
      pricePerHour: 75,
      categories: ['Pastoral Care', 'Discipleship'],
      specialties: ['Prayer Life', 'Biblical Counseling', 'Leadership Development'],
      sessionLength: 60,
      successRate: 96,
      location: 'California, USA',
      experience: 15,
      verified: true,
      availableToday: true,
      sessionTypes: ['video', 'chat'],
      bio: 'Passionate about helping believers grow deeper in their relationship with Christ through prayer, scripture study, and spiritual disciplines.',
      testimonials: [
        {
          name: 'Sarah M.',
          text: 'Pastor Michael helped me develop a consistent prayer life that has transformed my walk with God.',
          rating: 5
        }
      ]
    },
    {
      id: '2',
      name: 'Dr. Grace Williams',
      title: 'Christian Counselor & Author',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      rating: 4.8,
      reviewCount: 89,
      pricePerHour: 85,
      categories: ['Christian Counseling', 'Women\'s Ministry'],
      specialties: ['Marriage & Family', 'Grief Support', 'Identity in Christ'],
      sessionLength: 50,
      successRate: 94,
      location: 'Texas, USA',
      experience: 12,
      verified: true,
      availableToday: false,
      sessionTypes: ['video', 'chat', 'in-person'],
      bio: 'Combining biblical wisdom with professional counseling to help individuals and families find healing and hope in Christ.',
      testimonials: [
        {
          name: 'David R.',
          text: 'Dr. Williams guided our marriage through a difficult season with grace and biblical wisdom.',
          rating: 5
        }
      ]
    },
    {
      id: '3',
      name: 'Elder James Thompson',
      title: 'Youth Pastor & Discipleship Coach',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      rating: 4.7,
      reviewCount: 156,
      pricePerHour: 60,
      categories: ['Youth Ministry', 'Discipleship'],
      specialties: ['Teen Mentorship', 'Bible Study', 'Spiritual Formation'],
      sessionLength: 45,
      successRate: 92,
      location: 'Florida, USA',
      experience: 8,
      verified: true,
      availableToday: true,
      sessionTypes: ['video', 'chat'],
      bio: 'Dedicated to helping young people discover their purpose in Christ and develop strong spiritual foundations.',
      testimonials: [
        {
          name: 'Maria L.',
          text: 'Elder James helped my teenager navigate faith questions with patience and biblical truth.',
          rating: 5
        }
      ]
    },
    {
      id: '4',
      name: 'Sister Mary Catherine',
      title: 'Spiritual Director & Prayer Minister',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      rating: 4.9,
      reviewCount: 203,
      pricePerHour: 70,
      categories: ['Spiritual Direction', 'Prayer Ministry'],
      specialties: ['Contemplative Prayer', 'Spiritual Discernment', 'Retreat Guidance'],
      sessionLength: 60,
      successRate: 98,
      location: 'New York, USA',
      experience: 20,
      verified: true,
      availableToday: true,
      sessionTypes: ['video', 'chat', 'in-person'],
      bio: 'Guiding souls into deeper intimacy with God through contemplative prayer and spiritual direction.',
      testimonials: [
        {
          name: 'Robert K.',
          text: 'Sister Mary Catherine helped me discover the beauty of contemplative prayer and silence with God.',
          rating: 5
        }
      ]
    },
    {
      id: '5',
      name: 'Rev. Daniel Martinez',
      title: 'Missionary & Cross-Cultural Minister',
      image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg',
      rating: 4.8,
      reviewCount: 94,
      pricePerHour: 65,
      categories: ['Missions', 'Cross-Cultural Ministry'],
      specialties: ['Evangelism', 'Cultural Sensitivity', 'Ministry Training'],
      sessionLength: 55,
      successRate: 93,
      location: 'Arizona, USA',
      experience: 18,
      verified: true,
      availableToday: false,
      sessionTypes: ['video', 'chat'],
      bio: 'Passionate about equipping believers for effective cross-cultural ministry and evangelism.',
      testimonials: [
        {
          name: 'Jennifer S.',
          text: 'Rev. Martinez prepared me beautifully for my mission trip with practical and spiritual guidance.',
          rating: 5
        }
      ]
    },
    {
      id: '6',
      name: 'Dr. Ruth Anderson',
      title: 'Biblical Scholar & Teacher',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      rating: 4.9,
      reviewCount: 167,
      pricePerHour: 80,
      categories: ['Biblical Studies', 'Teaching'],
      specialties: ['Old Testament', 'Hebrew Language', 'Biblical Archaeology'],
      sessionLength: 60,
      successRate: 97,
      location: 'Illinois, USA',
      experience: 25,
      verified: true,
      availableToday: true,
      sessionTypes: ['video', 'chat'],
      bio: 'Bringing the ancient world of Scripture to life through scholarly insight and passionate teaching.',
      testimonials: [
        {
          name: 'Michael T.',
          text: 'Dr. Anderson opened up the Old Testament in ways I never imagined possible.',
          rating: 5
        }
      ]
    },
    {
      id: '7',
      name: 'Pastor Sarah Johnson',
      title: 'Women\'s Ministry Leader',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      rating: 4.8,
      reviewCount: 134,
      pricePerHour: 70,
      categories: ['Women\'s Ministry', 'Pastoral Care'],
      specialties: ['Women\'s Leadership', 'Life Transitions', 'Biblical Womanhood'],
      sessionLength: 50,
      successRate: 95,
      location: 'Georgia, USA',
      experience: 11,
      verified: true,
      availableToday: true,
      sessionTypes: ['video', 'chat', 'in-person'],
      bio: 'Empowering women to discover their God-given purpose and walk confidently in their calling.',
      testimonials: [
        {
          name: 'Lisa K.',
          text: 'Pastor Sarah helped me navigate a difficult life transition with wisdom and compassion.',
          rating: 5
        }
      ]
    },
    {
      id: '8',
      name: 'Dr. Mark Stevens',
      title: 'Marriage & Family Counselor',
      image: 'https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg',
      rating: 4.9,
      reviewCount: 178,
      pricePerHour: 90,
      categories: ['Marriage & Family', 'Christian Counseling'],
      specialties: ['Couples Therapy', 'Family Dynamics', 'Conflict Resolution'],
      sessionLength: 60,
      successRate: 97,
      location: 'Colorado, USA',
      experience: 16,
      verified: true,
      availableToday: false,
      sessionTypes: ['video', 'in-person'],
      bio: 'Helping couples and families build strong, Christ-centered relationships through biblical counseling principles.',
      testimonials: [
        {
          name: 'John & Mary D.',
          text: 'Dr. Stevens saved our marriage and taught us how to love each other the way Christ loves us.',
          rating: 5
        }
      ]
    }
  ];
  
  export const featuredExpertsData = expertData.slice(0, 4);