import babel from 'rollup-plugin-babel';

export default [{
    entry: './src/index.js',
    format: 'iife',
    dest: './dist/dist.js',
    plugins: [
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers'],
            externalHelpers: true
        })
    ]
}]