import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Next.js App Router에서 최대 응답 시간을 30초로 허용합니다. (Edge나 Serverless 환경)
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    // 프론트엔드에서 보낸 메시지 배열을 추출합니다.
    const { messages } = await req.json();

    // Vercel AI SDK를 사용하여 OpenAI 모델을 호출하고 스트리밍 응답을 받습니다.
    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: `당신은 친절하고 전문적인 수학 선생님 '수학멘토'입니다. 
학생들이 수학 문제나 개념에 대해 질문하면, 명확하고 이해하기 쉽게 단계별로 설명해 주세요.
수식이나 기호가 필요하다면 마크다운 형식으로 깔끔하게 정리해서 답변해 주고, 
학생이 주눅 들지 않도록 항상 격려하는 따뜻한 톤을 유지하세요.`,
      messages,
    });

    // 프론트엔드로 실시간 스트리밍(Streaming) 응답을 반환합니다.
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to process chat request." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
