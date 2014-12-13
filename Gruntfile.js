'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'handlebars'

module.exports = function (grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    // show elapsed time at the end
    require('time-grunt')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist',
        tmp: '.tmp',
    };

    //////////////////
    // grunt.option //
    //////////////////
    var stubOption = grunt.option('stub');

    //////////////////
    // grunt.config //
    //////////////////
    grunt.initConfig({
        yeoman: yeomanConfig,

        // watch list
        watch: {
            compass: {
                files: ['<%= yeoman.app %>/styles/**/*.scss'],
                tasks: ['compass:dev']
            },
            livereload: {
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,**/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,**/}*.js',
                    '{.tmp,<%= yeoman.app %>}/templates/{,**/}*.hbs',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                    // 'test/spec/{,**/}*.js' TODO livereload the next new tests
                ],
                options: {
                    livereload: true
                }
            }
        },

        // testing server
        connect: {
            testserver: {
                options: {
                    port: 1234,
                    base: '.'
                }
            }
        },

        // express app
        express: {
            options: {
                // Override defaults here
                port: '9000'
            },
            dev: {
                options: {
                    script: 'server/app.js',
                    args: [stubOption] // pass arguments to node
                }
            },
            prod: {
                options: {
                    script: 'server/app.js'
                }
            },
            test: {
                options: {
                    script: 'server/app.js'
                }
            }
        },

        // open app and test page
        open: {
            server: {
                path: 'http://localhost:<%= express.options.port %>'
            }
        },

        clean: {
            dist: ['<%= yeoman.tmp %>', '<%= yeoman.dist %>'],
            server: '.tmp'
        },

        // linting
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                // 'test/spec/{,*/}*.js' // TODO lint the next news tests
            ]
        },

        // compass
        compass: {
            // options: {
            //     sassDir: '<%= yeoman.app %>/styles',
            //     cssDir: '.tmp/styles',
            //     imagesDir: '<%= yeoman.app %>/images',
            //     javascriptsDir: '<%= yeoman.app %>/scripts',
            //     fontsDir: '<%= yeoman.app %>/styles/fonts',
            //     importPath: '<%= yeoman.app %>/bower_components',
            //     relativeAssets: true
            // },
            dist: {
              options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '<%= yeoman.tmp %>/styles/css'
              }
            },
            dev: { // Another target
              options: {
                debugInfo: true,
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '<%= yeoman.app %>/styles/css'
              }
            }
        },

        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },

        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },

        cssmin: {
          dist: {
            expand: true,
            cwd: '<%= yeoman.tmp %>/styles/css',
            src: 'main.css',
            dest: '<%= yeoman.dist %>/styles/',
            ext: '.min.css'
          }
        },

        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'bower_components/requirejs/require.js'
                    ]
                }]
            }
        },

        handlebars: {
            compile: {
                options: {
                    processName: function(filePath) {
                      var matches = filePath.match(new RegExp('app\/templates\/(.*).hbs'));
                      return matches ? matches[1] : filePath;
                    },
                    namespace: 'templates',
                    amd: true
                },
                files: {
                    '<%= yeoman.tmp %>/scripts/templates.js': ['<%= yeoman.app %>/templates/**/*.hbs']
                }
            }
        },

        mocha: {
            test: {
                options: {
                    reporter: 'Spec'
                },
                src: ['tests/index.html']
            }
        },

        requirejs: {
          compile: {
            options: {
              baseUrl: "<%= yeoman.app %>/scripts/",
              name: "init",
              mainConfigFile: '<%= yeoman.app %>/scripts/init.js',
              out: "<%= yeoman.dist %>/js/script.js",
              preserveLicenseComments: false,
              optimize: 'uglify2',
              paths: {
                requireLib: '../bower_components/requirejs/require',
                templates: '../../<%= yeoman.tmp %>/scripts/templates'
              },
              include: 'requireLib',
              wrapShim: true
            }
          }
        },

        processhtml: {
          dist: {
            files: {
              '<%= yeoman.dist %>/index.html': ['<%= yeoman.app %>/index.html']
            }
          }
        }
    });

    grunt.registerTask('test', ['mocha']);

    grunt.registerTask('createDefaultTemplate', function () {
        grunt.file.write('.tmp/scripts/templates.js', 'this.templates = this.templates || {};');
    });

    // starts express server with live testing via testserver
    grunt.registerTask('serve', [
      'clean:server',
      'compass:dev',
      'connect:testserver',
      'express:dev',
      'open',
      'watch'
    ]);

    grunt.registerTask('dist', [
        'createDefaultTemplate', // is it helpful ?
        'clean:dist',
        'compass:dist',
        'cssmin:dist',
        'handlebars',
        'requirejs',
        'processhtml:dist'
    ]);

    grunt.registerTask('release', [
        'clean:dist'
    ]);

};
