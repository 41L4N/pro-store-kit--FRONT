<script setup>
import { ref } from 'vue'

const dark = ref(false)

const toggleTheme = () => {
  dark.value = !dark.value
    document.documentElement.classList.toggle('dark-mode', dark.value)
    }
    </script>

    <template>
      <button @click="toggleTheme">
          {{ dark ? 'Modo oscuro' : 'Modo claro' }}
            </button>
            </template>

            <style>
            :root {
              --surface: #f0f2f5;
                --btn-bg: #ffffff;
                  --btn-text: #1a1a2e;
                  }

                  .dark-mode {
                    --surface: #0f0f1a;
                      --btn-bg: #1e1e30;
                        --btn-text: #e2e8f0;
                        }

                        body {
                          background: var(--surface);
                          }

                          button {
                            padding: 12px 24px;
                              background: var(--btn-bg);
                                color: var(--btn-text);
                                }
                                </style>