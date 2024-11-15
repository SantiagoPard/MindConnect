interface Resource {
  title: string;
  duration: string;
  thumbnail: string;
  type: string;
  videoUrl: string;
}

interface Category {
  title: string;
  icon: any;
  resources: Resource[];
}

export const allResources: Category[] = [
  {
    title: 'Daily Mindfulness',
    icon: 'Brain',
    resources: [
      {
        title: 'Guided Meditation to Start the Day',
        duration: '10 min',
        thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80',
        type: 'Meditation',
        videoUrl: 'https://www.youtube.com/embed/6kVVrE_sCNA'
      },
      {
        title: 'Breathing Exercises Between Classes',
        duration: '5 min',
        thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
        type: 'Breathing',
        videoUrl: 'https://www.youtube.com/embed/rQZq8NUF4bY'
      },
      {
        title: 'Mindfulness for Better Focus',
        duration: '15 min',
        thumbnail: 'https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?auto=format&fit=crop&w=1000&q=80',
        type: 'Focus',
        videoUrl: 'https://www.youtube.com/embed/wGFog-OuFDM'
      },
      {
        title: 'Meditation for Anxiety',
        duration: '20 min',
        thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=80',
        type: 'Meditation',
        videoUrl: 'https://www.youtube.com/embed/O-6f5wQXSu8'
      },
      {
        title: 'Mindful Attention Practice',
        duration: '8 min',
        thumbnail: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1000&q=80',
        type: 'Mindfulness',
        videoUrl: 'https://www.youtube.com/embed/4PkrhH-bkpk'
      },
      {
        title: 'Better Sleep Meditation',
        duration: '15 min',
        thumbnail: 'https://images.unsplash.com/photo-1511295742362-92c96b5adb36?auto=format&fit=crop&w=1000&q=80',
        type: 'Meditation',
        videoUrl: 'https://www.youtube.com/embed/S3UH4Km3mYc'
      },
      {
        title: 'Daily Gratitude Exercise',
        duration: '7 min',
        thumbnail: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?auto=format&fit=crop&w=1000&q=80',
        type: 'Mindfulness',
        videoUrl: 'https://www.youtube.com/embed/xPG07OvKzLQ'
      },
      {
        title: 'Nature Mindfulness',
        duration: '12 min',
        thumbnail: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1000&q=80',
        type: 'Mindfulness',
        videoUrl: 'https://www.youtube.com/embed/wLpLYcEZR88'
      },
      {
        title: 'Morning Meditation',
        duration: '10 min',
        thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
        type: 'Meditation',
        videoUrl: 'https://www.youtube.com/embed/SEfs5TJZ6Nk'
      },
      {
        title: 'Deep Breathing Practice',
        duration: '6 min',
        thumbnail: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&w=1000&q=80',
        type: 'Breathing',
        videoUrl: 'https://www.youtube.com/embed/YFSc7Ck0Ao0'
      },
      {
        title: 'Stress Relief Meditation',
        duration: '15 min',
        thumbnail: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=1000&q=80',
        type: 'Meditation',
        videoUrl: 'https://www.youtube.com/embed/t1rRo6cgM_E'
      },
      {
        title: 'Self-Compassion Mindfulness',
        duration: '18 min',
        thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=80',
        type: 'Mindfulness',
        videoUrl: 'https://www.youtube.com/embed/IvtZBUSplr4'
      },
      {
        title: 'Inner Peace Guided Meditation',
        duration: '20 min',
        thumbnail: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&w=1000&q=80',
        type: 'Meditation',
        videoUrl: 'https://www.youtube.com/embed/W8a3T8pI9Ns'
      },
      {
        title: 'Mindful Awareness Exercises',
        duration: '8 min',
        thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
        type: 'Mindfulness',
        videoUrl: 'https://www.youtube.com/embed/dG5ywz8OGqo'
      },
      {
        title: 'Mental Clarity Meditation',
        duration: '15 min',
        thumbnail: 'https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?auto=format&fit=crop&w=1000&q=80',
        type: 'Meditation',
        videoUrl: 'https://www.youtube.com/embed/inpok4MKVLM'
      },
      {
        title: 'Loving-Kindness Practice',
        duration: '12 min',
        thumbnail: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?auto=format&fit=crop&w=1000&q=80',
        type: 'Mindfulness',
        videoUrl: 'https://www.youtube.com/embed/sz-cNBAK7Qs'
      },
      {
        title: 'Focus Meditation',
        duration: '10 min',
        thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80',
        type: 'Meditation',
        videoUrl: 'https://www.youtube.com/embed/k0PSUDvLi8E'
      },
      {
        title: 'Mindful Breathing Exercises',
        duration: '7 min',
        thumbnail: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&w=1000&q=80',
        type: 'Breathing',
        videoUrl: 'https://www.youtube.com/embed/F28MGLlpP90'
      },
      {
        title: 'Emotional Balance Mindfulness',
        duration: '16 min',
        thumbnail: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=1000&q=80',
        type: 'Mindfulness',
        videoUrl: 'https://www.youtube.com/embed/2fbaoqkY0Qk'
      },
      {
        title: 'Evening Meditation',
        duration: '15 min',
        thumbnail: 'https://images.unsplash.com/photo-1511295742362-92c96b5adb36?auto=format&fit=crop&w=1000&q=80',
        type: 'Meditation',
        videoUrl: 'https://www.youtube.com/embed/6z6IpP4c4EY'
      }
    ]
  },
  {
    title: 'Stress Management',
    icon: 'BookOpen',
    resources: [
      {
        title: 'Effective Study Techniques',
        duration: '12 min',
        thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
        type: 'Academic',
        videoUrl: 'https://www.youtube.com/embed/Z7jj8HoKBLY'
      },
      {
        title: 'Exam Time Management',
        duration: '8 min',
        thumbnail: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1000&q=80',
        type: 'Organization',
        videoUrl: 'https://www.youtube.com/embed/TQMbvJNRpLE'
      },
      {
        title: 'Reducing Test Anxiety',
        duration: '15 min',
        thumbnail: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1000&q=80',
        type: 'Anxiety',
        videoUrl: 'https://www.youtube.com/embed/qUcC71-W9Os'
      },
      {
        title: 'Muscle Relaxation Techniques',
        duration: '10 min',
        thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
        type: 'Relaxation',
        videoUrl: 'https://www.youtube.com/embed/HFwCKKa--18'
      },
      {
        title: 'Managing Academic Stress',
        duration: '15 min',
        thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
        type: 'Academic',
        videoUrl: 'https://www.youtube.com/embed/0fL-pn80s-c'
      },
      {
        title: 'Study Time Organization',
        duration: '12 min',
        thumbnail: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1000&q=80',
        type: 'Organization',
        videoUrl: 'https://www.youtube.com/embed/uf8XGZhXENo'
      },
      {
        title: 'Overcoming Procrastination',
        duration: '8 min',
        thumbnail: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1000&q=80',
        type: 'Productivity',
        videoUrl: 'https://www.youtube.com/embed/km4PtYqAQB4'
      },
      {
        title: 'Tension Relief Exercises',
        duration: '10 min',
        thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
        type: 'Relaxation',
        videoUrl: 'https://www.youtube.com/embed/SedzswEwpPw'
      },
      {
        title: 'Healthy Study Habits',
        duration: '15 min',
        thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
        type: 'Academic',
        videoUrl: 'https://www.youtube.com/embed/k4LxJ1tZzLA'
      },
      {
        title: 'Handling Academic Pressure',
        duration: '12 min',
        thumbnail: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1000&q=80',
        type: 'Academic',
        videoUrl: 'https://www.youtube.com/embed/4H-4r6YuXBY'
      },
      {
        title: 'Effective Memorization Techniques',
        duration: '18 min',
        thumbnail: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1000&q=80',
        type: 'Academic',
        videoUrl: 'https://www.youtube.com/embed/q8wN6x0QkZM'
      },
      {
        title: 'Study-Rest Balance',
        duration: '10 min',
        thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
        type: 'Wellbeing',
        videoUrl: 'https://www.youtube.com/embed/LFGsZ6ythQQ'
      },
      {
        title: 'Managing Social Anxiety',
        duration: '15 min',
        thumbnail: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1000&q=80',
        type: 'Anxiety',
        videoUrl: 'https://www.youtube.com/embed/qUcC71-W9Os'
      },
      {
        title: 'Focus Techniques',
        duration: '12 min',
        thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
        type: 'Academic',
        videoUrl: 'https://www.youtube.com/embed/wfKv2qG8Lps'
      },
      {
        title: 'Mental Exam Preparation',
        duration: '20 min',
        thumbnail: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1000&q=80',
        type: 'Academic',
        videoUrl: 'https://www.youtube.com/embed/J8TXvQIF5wY'
      },
      {
        title: 'Managing Family Pressure',
        duration: '15 min',
        thumbnail: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1000&q=80',
        type: 'Wellbeing',
        videoUrl: 'https://www.youtube.com/embed/YZRHpdU_6TY'
      },
      {
        title: 'Advanced Study Techniques',
        duration: '25 min',
        thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
        type: 'Academic',
        videoUrl: 'https://www.youtube.com/embed/V-UvSKe8jW4'
      },
      {
        title: 'Free Time Management',
        duration: '10 min',
        thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
        type: 'Organization',
        videoUrl: 'https://www.youtube.com/embed/b7t5U6rZnqw'
      },
      {
        title: 'Overcoming Mental Blocks',
        duration: '15 min',
        thumbnail: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1000&q=80',
        type: 'Academic',
        videoUrl: 'https://www.youtube.com/embed/dzjZdZQyF-E'
      },
      {
        title: 'Emotional Self-Control Techniques',
        duration: '18 min',
        thumbnail: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1000&q=80',
        type: 'Wellbeing',
        videoUrl: 'https://www.youtube.com/embed/amBVF0SMNh8'
      }
    ]
  }
];

// Featured resources for the home page (subset of allResources)
export const featuredResources = {
  'Daily Mindfulness': allResources[0].resources.slice(0, 3),
  'Stress Management': allResources[1].resources.slice(0, 3)
};