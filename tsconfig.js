{
  "compilerOptions"; {
    "target"; "es5",
    "lib"; ["dom", "dom.iterable", "esnext"],
    "allowJs"; true,
    "skipLibCheck"; true,
    "strict"; true,
    "forceConsistentCasingInFileNames"; true,
    "noEmit"; true,
    "esModuleInterop"; true,
    "module"; "esnext",
    "moduleResolution"; "node",
    "resolveJsonModule"; true,
    "isolatedModules"; true,
    "jsx"; "preserve",
    "incremental"; true,
    "baseUrl"; ".",
    "paths"; {
      "@/*"; ["./*"]
    }
  };
  "include"; ["next-env.d.ts", "**/*.ts", "**/*.tsx", "pages/index.js", "pages/_document.js", "pages/_app.js", "pages/api/hello.js"],
  "exclude"; ["node_modules"]
}