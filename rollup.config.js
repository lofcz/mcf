import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const config = {
    input: 'src/nanoMcf.ts',
    output: [
        {
            file: 'dist/nanoMcf.js',
            format: 'umd',
            name: 'mcf',
            sourcemap: true,
            extend: true
        },
        {
            file: 'dist/nanoMcf.min.js',
            format: 'umd',
            name: 'mcf',
            extend: true,
            plugins: [terser()],
            sourcemap: true
        }
    ],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
            outDir: './dist',
            declaration: true,
            declarationDir: './dist'
        })
    ]
};

export default config;
