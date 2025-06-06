import {
  pgTable,
  varchar,
  boolean,
  text,
  timestamp,
  json,
  serial,
  uniqueIndex
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const user = pgTable("user", {
  id: varchar({ length: 255 }).primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  emailVerified: boolean().notNull().default(false),
  image: varchar({ length: 1024 }),
  createdAt: timestamp({ mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp({ mode: "date" }).notNull().defaultNow(),
});

export const session = pgTable("session", {
  id: varchar({ length: 255 }).primaryKey(),
  userId: varchar({ length: 255 })
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  token: varchar({ length: 255 }).notNull(),
  expiresAt: timestamp({ mode: "date" }).notNull(),
  ipAddress: varchar({ length: 64 }),
  userAgent: varchar({ length: 512 }),
  createdAt: timestamp({ mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp({ mode: "date" }).notNull().defaultNow(),
});

export const account = pgTable("account", {
  id: varchar({ length: 255 }).primaryKey(),
  userId: varchar({ length: 255 })
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accountId: varchar({ length: 255 }).notNull(),
  providerId: varchar({ length: 255 }).notNull(),
  accessToken: varchar({ length: 1024 }),
  refreshToken: varchar({ length: 1024 }),
  accessTokenExpiresAt: timestamp({ mode: "date" }),
  refreshTokenExpiresAt: timestamp({ mode: "date" }),
  scope: varchar({ length: 512 }),
  idToken: varchar({ length: 2048 }),
  password: varchar({ length: 255 }),
  createdAt: timestamp({ mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp({ mode: "date" }).notNull().defaultNow(),
});

export const verification = pgTable("verification", {
  id: varchar({ length: 255 }).primaryKey(),
  identifier: varchar({ length: 255 }).notNull(),
  value: varchar({ length: 1024 }).notNull(),
  expiresAt: timestamp({ mode: "date" }).notNull(),
  createdAt: timestamp({ mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp({ mode: "date" }).notNull().defaultNow(),
});

export const gemini_descriptions = pgTable(
  "gemini_descriptions",
  {
    id: serial("id").primaryKey(), // auto-increment integer PK
    package_name: text("package_name").notNull(),
    details_hash: text("details_hash").notNull(),
    gemini_response: json("gemini_response").notNull(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    packageDetailsUnique: uniqueIndex("package_details_unique_idx").on(
      table.package_name,
      table.details_hash
    ),
  })
);
