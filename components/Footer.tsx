export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} MathClass. All rights reserved.
        </p>
        <div className="flex gap-4">
          {/* 여기에 추가적인 푸터 링크(이용약관, 개인정보처리방침 등)를 추가하세요 */}
          <span className="text-slate-400 text-sm hover:text-slate-600 cursor-pointer">이용약관</span>
          <span className="text-slate-400 text-sm hover:text-slate-600 cursor-pointer">개인정보처리방침</span>
        </div>
      </div>
    </footer>
  );
}
