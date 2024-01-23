"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occured</h1>
      <p>Falied to fetch mealdata. Please try again later.</p>
    </main>
  );
}
