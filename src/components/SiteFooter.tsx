type SiteFooterProps = { name: string };

function SiteFooter({ name }: SiteFooterProps) {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>Built with ❤️ by {name.split(" ")[0]}.</p>
    </footer>
  );
}

export default SiteFooter;
