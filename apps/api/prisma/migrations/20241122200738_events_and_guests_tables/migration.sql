-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "image" TEXT,
    "location" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageBackground" TEXT,
    "expectedAudience" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "guests" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "hasACompanions" BOOLEAN NOT NULL DEFAULT false,
    "amountOfCompanions" INTEGER NOT NULL DEFAULT 0,
    "eventId" TEXT NOT NULL,
    CONSTRAINT "guests_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "events_slug_key" ON "events"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "guests_email_key" ON "guests"("email");
