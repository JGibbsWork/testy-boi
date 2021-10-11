import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeMinifyJsonScript from 'rehype-minify-json-script'


function testParse(dirr) {
  return 'blahh'
  // unified()
  //   .use(remarkParse)
  //   .use(rehypeMinifyJsonScript)
  //   .use(rehypeStringify)
  //   .process(dirr, function(err, file) {
  //     console.error(report(err || file))
  //     console.log(String(file))
  //   })
}

export default testParse;