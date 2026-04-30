const withPhotos = [
  { id: 1,  name: 'Aisha Mensah', org: 'Roots Forward Foundation', bio: 'Building food resilience in underserved communities across West Africa. Founded at 22, now reaching 8,000 families across 3 countries.', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
  { id: 2,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face' },
  { id: 3,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face' },
  { id: 4,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.', photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face' },
  { id: 5,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face' },
  { id: 6,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face' },
  { id: 7,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.', photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face' },
  { id: 8,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.', photo: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&h=400&fit=crop&crop=face' },
  { id: 9,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.', photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face' },
  { id: 10, name: 'Name', org: 'Non Profit', bio: 'Coming soon.', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face' },
]

const rest = Array.from({ length: 90 }, (_, i) => ({
  id: i + 11,
  name: 'Name',
  org: 'Non Profit',
  bio: 'Coming soon.',
}))

export const founders = [...withPhotos, ...rest]
