const withPhotos = [
  { id: 1,  name: 'Aisha Mensah', org: 'Roots Forward Foundation', bio: 'Roots Forward Foundation mobilizes local farmers and youth volunteers to build sustainable food systems in underserved communities across West Africa.'},
  { id: 2,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.' },
  { id: 3,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.' },
  { id: 4,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.' },
  { id: 5,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.' },
  { id: 6,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.' },
  { id: 7,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.' },
  { id: 8,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.' },
  { id: 9,  name: 'Name', org: 'Non Profit', bio: 'Coming soon.' },
  { id: 10, name: 'Name', org: 'Non Profit', bio: 'Coming soon.' },
]

const rest = Array.from({ length: 90 }, (_, i) => ({
  id: i + 11,
  name: 'Name',
  org: 'Non Profit',
  bio: 'Coming soon.',
}))

export const founders = [...withPhotos, ...rest]
