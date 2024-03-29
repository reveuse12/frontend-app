function LayoutDashboard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <h1>tis layout</h1>
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
  );
}

export default LayoutDashboard;
