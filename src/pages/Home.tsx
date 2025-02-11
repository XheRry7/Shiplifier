import { GridContainer } from '@/features/grid/components/GridContainer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-gray-800">
         Shiplifier Grid
      </h1>
      <GridContainer />
      </div>
    </main>
  );
}