interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendiente: In tempor cupidatat adipisicing Lorem cupidatat ex.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'En-Progreso: Magna pariatur culpa et in elit irure ad aliquip nulla.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'Terminadas: Excepteur exercitation quis consequat quis non nulla incididunt esse.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
