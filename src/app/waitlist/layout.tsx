export default function WaitlistLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`header { display: none !important; }`}</style>
      {children}
    </>
  );
}
