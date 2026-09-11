export const useLanguageBars = (repoLang) => {
  const LANGUAGE_COLORS = {
    // Web
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    HTML: "#e34c26",
    CSS: "#563d7c",
    SCSS: "#c6538c",
    Sass: "#a53b70",
    Less: "#1d365d",
    Vue: "#41b883",
    Svelte: "#ff3e00",

    // Python / JVM
    Python: "#3572A5",
    Java: "#b07219",
    Kotlin: "#A97BFF",
    Scala: "#c22d40",
    Groovy: "#e69f56",
    Clojure: "#db5855",
    ClojureScript: "#db5855",

    // C Family
    C: "#555555",
    "C++": "#f34b7d",
    "C#": "#178600",
    "Objective-C": "#438eff",
    Objective: "#438eff",

    // Systems / Low-level
    Rust: "#dea584",
    Go: "#00ADD8",
    Swift: "#F05138",
    Zig: "#ec915c",
    Nim: "#ffc200",
    D: "#ba595e",
    Assembly: "#6E4C13",
    Vala: "#fbe5cd",

    // Scripting / Backend
    PHP: "#4F5D95",
    Ruby: "#701516",
    Perl: "#0298c3",
    Lua: "#000080",
    R: "#198CE7",
    Julia: "#a270ba",
    Dart: "#00B4AB",
    Elixir: "#6e4a7e",
    Erlang: "#B83998",
    Haskell: "#5e5086",
    FSharp: "#b845fc",
    "F#": "#b845fc",
    OCaml: "#3be133",
    Crystal: "#000100",

    // Shell / CLI
    Shell: "#89e051",
    Bash: "#89e051",
    PowerShell: "#012456",
    Batchfile: "#C1F12E",
    Makefile: "#427819",
    Awk: "#c30e9b",

    // Mobile
    "Objective-C": "#438eff",
    Swift: "#F05138",
    Kotlin: "#A97BFF",
    Dart: "#00B4AB",

    // Functional
    Lisp: "#3fb68b",
    Scheme: "#1e4aec",
    Racket: "#3c5caa",
    Elm: "#60B5CC",
    PureScript: "#1D222D",

    // Data / Query
    SQL: "#e38c00",
    PLpgSQL: "#336790",
    TSQL: "#e38c00",
    HiveQL: "#d2691e",
    GraphQL: "#e10098",
    Cypher: "#34A853",

    // Markup / Config
    Markdown: "#083fa1",
    MDX: "#fcb32c",
    JSON: "#292929",
    YAML: "#cb171e",
    TOML: "#9c4221",
    XML: "#0060ac",
    INI: "#d1dbe0",

    // DevOps / Infrastructure
    Dockerfile: "#384d54",
    HCL: "#844FBA",
    Terraform: "#844FBA",
    Nix: "#7e7eff",
    Puppet: "#302B6D",
    SaltStack: "#00EACE",
    Ansible: "#EE0000",

    // Framework / Template languages
    Handlebars: "#f7931e",
    EJS: "#a91e50",
    Jinja: "#B41717",
    Twig: "#c1d026",
    Pug: "#a86454",

    // Game / Graphics
    GDScript: "#355570",
    HLSL: "#aace60",
    GLSL: "#5686a5",
    ShaderLab: "#222c37",
    Metal: "#8e8e93",
    OpenGL: "#5586A4",

    // Hardware / Embedded
    Verilog: "#b2b7f8",
    SystemVerilog: "#DAE1C2",
    VHDL: "#adb2cb",
    Arduino: "#00979D",

    // Other popular languages
    CoffeeScript: "#244776",
    ActionScript: "#882B0F",
    Apex: "#1797c0",
    Solidity: "#AA6746",
    Prolog: "#74283c",
    Fortran: "#4d41b1",
    COBOL: "#000000",
    Pascal: "#E3F171",
    Delphi: "#E3F171",
    VisualBasic: "#945db7",
    "Visual Basic .NET": "#945db7",
    Smalltalk: "#596706",
    Tcl: "#e4cc98",
    XSLT: "#EB8CEB",
  };

  const getLanguageColor = (lang) => LANGUAGE_COLORS[lang] || "#64748b";
  const totalBytes =
    repoLang?.reduce((sum, arr) => sum + (arr[1] || 0), 0) || 1;

  const countPercent = (byte) => {
    return Math.round((byte / totalBytes) * 100 * 10) / 10;
  };
  return { countPercent, getLanguageColor };
};

export default useLanguageBars;
