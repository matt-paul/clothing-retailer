/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    // pkg: grunt.file.readJSON('package.json'),
    // banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
    //   '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    //   '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    //   '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    //   ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.

'http-server': {

    'dev': {

        root: './public',

        port: 8080,

        host: "127.0.0.1",

        cache: 10,
        showDir : true,
        autoIndex: true,

        // server default file extension
        ext: "html",

        // run in parallel with other tasks
        runInBackground: false,


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
    karma: {
      unit: {
        options: {
                // files: ['test/**/*.js'],
                configFile: 'test/karma.conf.js',
                // background: true,
                singleRun: true
              }
            },
    },
    jshint: {
      options: {
        // curly: true,
        // eqeqeq: true,
        // immed: true,
        // latedef: true,
        // newcap: true,
        // noarg: true,
        // sub: true,
        // undef: true,
        // unused: true,
        // boss: true,
        // eqnull: true,
        // browser: true,
        // globals: {},
        jshintrc: true
        // ignores: ['angular']
      },
      gruntfile: {
        // src: 'Gruntfile.js'
        src: ['Gruntfile.js', 'public/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        // files: ['Gruntfile.js', 'public/**/*.js', 'test/**/*.js'],
        tasks: ['jshint:gruntfile']
      },
      karma: {
        files: ['public/scripts/**/*.js', 'test/**/*.js'],
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
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-karma');

  // Default task.
  grunt.registerTask('default', ['sass', 'jshint', 'http-server','karma', 'watch']);

};

