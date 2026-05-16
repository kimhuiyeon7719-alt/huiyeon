import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* 서비스 로고 (수학) */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl flex items-center justify-center w-10 h-10">
            ∑
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">
            MathClass
          </span>
        </Link>
        
        {/* 네비게이션 바 공간 */}
        <nav className="hidden md:flex gap-6">
          {/* 여기에 새로운 네비게이션 링크를 추가하세요 */}
          <Link href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
            학습하기
          </Link>
          <Link href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
            오답노트
          </Link>
        </nav>
      </div>
    </header>
  );
}
