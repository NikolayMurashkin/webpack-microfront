import path from 'node:path';
import { Configuration } from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPlatform } from './config/build/types/types';

interface EnvVariables {
    mode?: BuildMode;
    port?: number;
    analyzer?: boolean;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const config: Configuration = buildWebpack({
        mode: env.mode ?? 'development',
        port: env.port ?? 4000,
        paths,
        analyzer: env.analyzer ?? false,
        platform: env.platform ?? 'desktop',
    });

    return config;
};
