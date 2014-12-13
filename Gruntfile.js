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
        tests: 'tests/js/spec',
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
                'tests/{,*/}*.spec.js'
            ]
        },

        jscs: {
          options: {
            config: '.jscs.json'
          },
          src: '<%= jshint.all %>'
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
              removeComments: true,
              collapseWhitespace: true
            },
            files: {
              '<%= yeoman.dist %>/index.html': '<%= yeoman.tmp %>/index.html'
            }
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
              out: "<%= yeoman.dist %>/js/script.min.js",
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
              '<%= yeoman.tmp %>/index.html': ['<%= yeoman.app %>/index.html']
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
      'lint',
      'watch'
    ]);

    grunt.registerTask('lint', ['jshint', 'jscs'] );

    grunt.registerTask('dist', [
        'createDefaultTemplate', // is it helpful ?
        'clean:dist',
        'compass:dist',
        'cssmin:dist',
        'handlebars',
        'requirejs',
        'processhtml:dist',
        'htmlmin:dist'
    ]);

    grunt.registerTask('release', [
        'clean:dist'
    ]);
};
