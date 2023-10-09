import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="h1-bold flex-center">
        Kamsiyonna Dev Overflow Next JS Project
      </h1>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
