import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

// 로컬 환경에서 마이그레이션 실행 시 .env.local을 참조합니다.
dotenv.config({ path: ".env.local" });

export default {
  schema: "./lib/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
