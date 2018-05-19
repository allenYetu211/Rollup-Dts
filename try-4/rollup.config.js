import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'
export default [{
    entry: './src/index.js',
    format: 'iife',
    dest: './js/dist_cjs.js',
    moduleName: 'rolluptry',
    option: {
        name: 'try',
    },
    plugins: [
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers'],
            externalHelpers: true
        })
    ]
}]