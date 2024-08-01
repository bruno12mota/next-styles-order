const { transform } = require('@svgr/core');
const jsx = require('@svgr/plugin-jsx')
const svgo = require('@svgr/plugin-svgo')

module.exports = async function SvgLoader(source) {
  this.cacheable && this.cacheable();
  const callback = this.async();

  try {
    const jsCode = await transform(
      source,
      { plugins: [svgo, jsx], icon: true, dimensions: false, exportType: 'named' },
      { componentName: 'ReactComponent' },
    );

    const base64icon = btoa(source);
    const bothExports = `${jsCode}
export default "data:image/svg+xml;base64,${base64icon}";`;

    callback(null, bothExports);
  } catch (e) {
    callback(e);
  }
};