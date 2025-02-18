import config from '@/config';
import getServerSession from '@/utils/session/server/getsession';
import { MainNav } from '@/components/bars/main-nav';
import { SignOutNav } from '@/components/bars/signout-nav';

export default async function ApplicationBar() {
  const session = await getServerSession();
  if (!session) {
    return null;
  }

  return (
    <nav className="container flex h-16 items-center justify-between">
      <MainNav appName={config.APP_NAME} />
      <SignOutNav />
    </nav>
  );
}
