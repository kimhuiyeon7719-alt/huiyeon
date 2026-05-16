import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl w-full text-center space-y-8">
        
        {/* 환영 문구 및 타이틀 */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            나만의 <span className="text-blue-600">수학교실</span> 만들기
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            어렵기만 했던 수학, 이제 당신만의 맞춤형 교실에서 쉽고 재미있게 시작해보세요. 
            기초부터 심화까지 완벽하게 지원합니다.
          </p>
        </div>

        {/* 가짜(Placeholder) 버튼 - 기능 추가를 위한 공간 */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* 여기에 새로운 기능(예: 로그인, 학습 시작)으로 연결되는 버튼을 추가하세요 */}
          <Link href="/chat" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1">
              수학 AI 멘토와 대화하기
            </button>
          </Link>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold rounded-xl shadow-sm transition-all">
            둘러보기
          </button>
        </div>

        {/* 여기에 추가적인 섹션(예: 추천 강의, 대시보드 요약 등) 컴포넌트를 추가하세요 */}
        {/* <RecommendedCourses /> */}
        {/* <DashboardSummary /> */}
        
      </div>
    </div>
  );
}
