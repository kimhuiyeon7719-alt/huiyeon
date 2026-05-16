import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

// 예시 테이블: 추후 사용자의 요청에 따라 변경 및 확장할 수 있습니다.
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
