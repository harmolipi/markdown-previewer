import { useState } from 'react';
import MarkdownInput from './components/MarkdownInput';
import MarkdownPreview from './components/MarkdownPreview';

const App = () => {
  const [markdownText, setMarkdownText] = useState('');

  const handleMarkdownTextChange = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div className="App">
      <div className="container mx-auto grid grid-cols-2 gap-4 mt-4 h-screen">
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
