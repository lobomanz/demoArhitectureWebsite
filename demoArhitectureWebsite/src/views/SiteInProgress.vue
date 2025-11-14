<template>
  <div class="container">
    <div class="card">
      <h1>503</h1>
      <p>
        Our site is currently under scheduled maintenance.<br />
        Please check back soon.
      </p>
      <div class="status">Error 503 • Service Temporarily Unavailable</div>
    </div>
  </div>
</template>

<script setup>
// You can add Vue logic here later if needed
</script>

<style scoped>
.container {
  margin: 0;
  background-color: #f9f9f9;
  color: #2c3e50;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  display: grid;
  place-items: center;
  height: 100vh;
  text-align: center;
  animation: fadeIn 1.5s ease-in;
}

.card {
  max-width: 480px;
  padding: 3rem 2rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-left: 6px solid #e74c3c;
}

h1 {
  font-size: 3rem;
  margin: 0 0 0.5rem;
  color: #e74c3c;
}

p {
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.status {
  font-size: 0.95rem;
  color: #999;
  font-family: monospace;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 500px) {
  .card {
    padding: 2rem 1.25rem;
  }

  h1 {
    font-size: 2.25rem;
  }
}
</style>
