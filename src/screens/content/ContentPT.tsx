import React from 'react';
import LeftSideBar from 'components/leftSideBar';
import { Loader } from 'components/loader/Loader';
import styles from './Content.module.scss';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import ErrorPopup from 'components/errorPopup';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  vscDarkPlus,
  vs
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

const ContentPT = ({
  loading,
  isNight,
  title,
  content,
  markdownCheatSheets
}: typeContentPT) => {
  return (
    <>
      <Loader loading={loading} />
      <Header />
      <LeftSideBar />
      <ErrorPopup />
      <div
        className={
          isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap
        }
      >
        <div className={styles.innerWrap}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.content}>
            <ReactMarkdown
              children={content ? content : ''}
              remarkPlugins={[remarkGfm]}
              components={{
                p: 'div',
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      PreTag="div"
                      // showLineNumbers={true}
                      // showInlineLineNumbers={true}
                      style={isNight ? vscDarkPlus : vs}
                    />
                  ) : (
                    <div>
                      {markdownCheatSheets && (
                        <div>
                          {markdownCheatSheets?.map(
                            ({ element, syntax }: any) => {
                              return (
                                <div key={element}>
                                  <h1>{element}</h1>
                                  <p>{syntax}</p>
                                  <div>
                                    <h3>Examples</h3>
                                    <ReactMarkdown
                                      children={syntax}
                                      remarkPlugins={[remarkGfm]}
                                      components={{
                                        code({ children, ...props }) {
                                          return (
                                            <SyntaxHighlighter
                                              // showLineNumbers={true}
                                              // showInlineLineNumbers={true}
                                              children={String(
                                                children
                                              ).replace(/\n$/, '')}
                                              PreTag="div"
                                              style={isNight ? vscDarkPlus : vs}
                                            />
                                          );
                                        }
                                      }}
                                    />
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      )}
                    </div>
                  );
                }
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

interface typeContentPT {
  loading?: boolean;
  isNight?: boolean;
  title: string;
  content?: string;
  markdownCheatSheets: Array<string>;
}

export default ContentPT;
