import { getUserSession } from '@/app/lib/lib';

export default async function Dashboard() {
  const session = await getUserSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Dashboard</h1>
      <p>{session}</p>
    </div>
  );
}
