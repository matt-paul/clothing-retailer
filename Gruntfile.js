module.exports = function(grunt) {

  grunt.initConfig({

    'http-server': {

    'dev': {
        root: './public',
        port: 8080,
        host: "127.0.0.1",
        cache: 10,
        showDir : true,
        autoIndex: true,
        ext: "html",
        runInBackground: true,
    }

    },
    sass: {
        options: {
            // sourceMap: true
        },
        dist: {
            files: {
                'public/styles/main.css': 'public/styles/main.scss'
            }
        }
    },

    protractor: {
      options: {
        configFile: "node_modules/protractor/example/conf.js", // Default config file
        keepAlive: true,
        noColor: false,
        args: {
          // Arguments passed to the command
        }
      },
      your_target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
        options: {
          configFile: "e2e.conf.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      },
    },

    karma: {
      unit: {
        options: {
                // files: ['test/unit/*.js'],
                configFile: 'test/karma.conf.js',
                // background: true,
                singleRun: false
              }
            },
    },
    jshint: {
      options: {
        jshintrc: true
      },
      gruntfile: {
        src: ['Gruntfile.js', 'public/**/*.js']
      }
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      karma: {
        files: ['public/scripts/**/*.js', 'test/unit/*.js'],
        tasks: ['karma:unit:run'] //NOTE the :run flag
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-karma');

  // Default task.
  grunt.registerTask('default', ['sass', 'jshint','karma', 'watch', 'http-server']);

};

