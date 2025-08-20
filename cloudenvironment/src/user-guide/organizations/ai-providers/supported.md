# Supported AI Providers

The following AI providers are supported in Pextra CloudEnvironment®:

| Name | ID | Cloud-Hosted |
|-|-|-|
| [OpenAI](https://openai.com)| `openai` | ✅ |
| [Anthropic](https://www.anthropic.com)| `anthropic` | ✅ |
| [Google](https://ai.google)| `google` | ✅ |
| [xAI](https://x.ai)| `xai` | ✅ |
| [Mistral](https://mistral.ai)| `mistral` | ✅ |
| [DeepInfra](https://deepinfra.com)| `deepinfra` | ✅ |
| [DeepSeek](https://deepseek.com)| `deepseek` | ✅ |
| [Cerebras](https://www.cerebras.ai)| `cerebras` | ✅ |
| [Groq](https://groq.com)| `groq` | ✅ |
| [Perplexity](https://www.perplexity.ai)| `perplexity` | ✅ |
| [Cohere](https://cohere.com)| `cohere` | ✅ |
| [Ollama](https://ollama.com)| `ollama` | ❌ (self-hosted) |
| [LM Studio](https://lmstudio.ai)| `lmstudio` | ❌ (self-hosted) |

## OpenAI-Compatible Providers

For AI providers that are OpenAI-compatible but are not explicitly listed above, use the `openai` provider type and configure a custom base URL. For more information, refer to the [Add AI Provider](./add.md#adding-openai-compatible-providers) section.
