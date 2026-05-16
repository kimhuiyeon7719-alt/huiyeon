import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Vercel 환경에서는 process.env.DATABASE_URL이 자동으로 주입됩니다.
// 로컬 개발 시에는 .env.local 파일에 설정한 값을 사용합니다.
const sql = neon(process.env.DATABASE_URL!);

// db 인스턴스를 통해 데이터베이스 쿼리를 실행할 수 있습니다.
export const db = drizzle(sql);
