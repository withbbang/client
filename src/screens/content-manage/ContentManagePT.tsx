import React from 'react';
import LeftSideBar from 'components/leftSideBar';
import { Loader } from 'components/loader/Loader';
import styles from './ContentManage.module.scss';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import ErrorPopup from 'components/errorPopup';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  darcula,
  solarizedlight,
  synthwave84
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import FunctionPopup from 'components/functionPopup/FunctionPopup';
import SVG from 'modules/SVG';

const ContentManagePT = ({
  loading,
  isNight,
  markdownCheatSheets,
  categoryId,
  title,
  content,
  children,
  isFunctionPopupActive,
  setCategoryId,
  setTitle,
  setContent,
  onCreateUpdatePopup
}: typeContentManagePT) => {
  return (
    <>
      <Loader loading={loading} />
      <Header />
      <LeftSideBar />
      <ErrorPopup />
      <FunctionPopup
        isActive={isFunctionPopupActive}
        children={children}
        onClose={onCreateUpdatePopup}
      />
      <div
        className={
          isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap
        }
      >
        <div className={styles.innerWrap}>
          <ReactMarkdown
            children={content ? content : ''}
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    showLineNumbers={true}
                    showInlineLineNumbers={true}
                    children={String(children).replace(/\n$/, '')}
                    style={isNight ? synthwave84 : solarizedlight}
                    language={match[1]}
                    PreTag="div"
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
                                            showLineNumbers={true}
                                            showInlineLineNumbers={true}
                                            children={String(children).replace(
                                              /\n$/,
                                              ''
                                            )}
                                            style={darcula}
                                            PreTag="section"
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
        <div className={styles.createUpdateBtn} onClick={onCreateUpdatePopup}>
          <SVG
            type="modify"
            width="20px"
            height="20px"
            fill={isNight ? '#fff' : '#000'}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

interface typeContentManagePT {
  loading?: boolean;
  isNight?: boolean;
  markdownCheatSheets: Array<string>;
  children: JSX.Element;
  categoryId: number;
  title: string;
  content?: string;
  isFunctionPopupActive: boolean;
  setCategoryId: React.Dispatch<React.SetStateAction<number>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string | undefined>>;
  onCreateUpdatePopup: () => void;
}

export default ContentManagePT;
