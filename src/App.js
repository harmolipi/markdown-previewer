import { useState } from 'react';
import { marked } from 'marked';
import MarkdownInput from './components/MarkdownInput';
import MarkdownPreview from './components/MarkdownPreview';

const App = () => {
  const defaultMarkdown = `# Markdown Editor
## Write your markdown here
You can also create [links](https://www.freecodecamp.org), \`inline code\`, and
\`\`\`
code blocks
like this.
\`\`\`
Even lists are possible:
- Milk
- Eggs
- JavaScript

And quotes:
> This is certainly a quote **someone** said.

And images:
![King Oswald of Northumbria](https://img.search.brave.com/rbSL4OGWCKWcGrk9DzRQ_VUXV66nRbxstpEImiXWPO8/fit/427/720/ce/1/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhhL2Qx/L2Q3LzhhZDFkNzM2/MTA4ZDRlMjM2YWJk/ZmE0ZjU2ODRlNTA1/LmpwZw)`;

  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  const handleMarkdownTextChange = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div className="App">
      <div className="container mx-auto grid grid-cols-2 gap-4 pt-20 h-screen">
        <MarkdownInput
          markdown={markdownText}
          handleChange={handleMarkdownTextChange}
        />
        <MarkdownPreview previewText={markdownText} />
      </div>
    </div>
  );
};

export default App;
