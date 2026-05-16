'use client';

import { useChat } from 'ai/react';
import { useRef, useEffect } from 'react';

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 메시지가 추가될 때마다 자동으로 스크롤을 맨 아래로 내립니다.
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col bg-slate-50 max-h-[calc(100vh-4rem)]">
      {/* 챗봇 헤더 */}
      <div className="bg-white border-b border-slate-200 py-4 px-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <span className="text-blue-600">🤖</span> 수학 멘토 AI
        </h1>
        <p className="text-sm text-slate-500">어려운 수학 문제를 편하게 물어보세요!</p>
      </div>

      {/* 채팅 메시지 영역 */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
            <div className="text-6xl">📚</div>
            <p className="text-lg">안녕하세요! 무엇을 도와드릴까요?</p>
            <p className="text-sm">예시: "이차방정식의 근의 공식을 설명해 줘"</p>
          </div>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-sm ${
                  m.role === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                }`}
              >
                <div className="whitespace-pre-wrap leading-relaxed">{m.content}</div>
              </div>
            </div>
          ))
        )}
        
        {/* 로딩 표시 */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-5 py-3 shadow-sm flex items-center gap-2">
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* 입력 폼 영역 */}
      <div className="bg-white border-t border-slate-200 p-4 sm:p-6">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex gap-4">
          <input
            className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={input}
            placeholder="수학 질문을 입력해 보세요..."
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            전송
          </button>
        </form>
      </div>
    </div>
  );
}
