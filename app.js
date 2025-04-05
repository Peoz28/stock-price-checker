function MarkdownPreviewer() {
    const defaultMarkdown = `# Welcome to my Markdown Previewer!

## This is a subheading

Here's a [link to GitHub](https://github.com)

Here's some \`inline code\` and a code block:

\`\`\`
function hello() {
    console.log("Hello, world!");
}
\`\`\`

Here's a list:
- Item 1
- Item 2
- Item 3

> This is a blockquote

![React Logo](https://reactjs.org/logo-og.png)

And some **bolded text**`;

    const [markdown, setMarkdown] = React.useState(defaultMarkdown);

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    const createMarkup = () => {
        return { __html: marked(markdown) };
    };

    return (
        <div className="container">
            <div className="editor-container">
                <textarea
                    id="editor"
                    value={markdown}
                    onChange={handleChange}
                />
            </div>
            <div className="preview-container">
                <div
                    id="preview"
                    dangerouslySetInnerHTML={createMarkup()}
                />
            </div>
        </div>
    );
}

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('root')); 