module.exports = function(grunt) {
   // Project configuration.
   grunt.initConfig({
      //read all plugins added in the package.json file
      pkg: grunt.file.readJSON('package.json'),

      stylus: {
         compile: {
            options: {
               compress: false
            },
            files: {
               'css/style.css': 'css/style.styl'
            }
         }
      },

      watch: {
         files: ['css/*.styl', 'index.html', 'js/main.js'],
         tasks: ['stylus', 'postcss'],
      },

      browserSync: {
         bsFiles: {
            src: ['css/*.css', 'index.html']
         },
         options: {
            watchTask: true,
            server: {
               baseDir: "g:/node/http-server/public/stylus/psdConvert-to-Website"
            }
         }
      },

      postcss: {
         options: {
            map: true, // inline sourcemaps
            processors: [
               require('pixrem')(), // add fallbacks for rem units
               require('autoprefixer')({
                  browsers: 'last 2 versions'
               }), // add vendor prefixes
               // require('cssnano')() // minify the result
            ]
         },
         dist: {
            src: 'css/style.css'
         }
      }

   });
   // register grunt plugins below
   //autoprefixer task
   grunt.loadNpmTasks('grunt-postcss');
   grunt.loadNpmTasks('grunt-contrib-stylus');
   grunt.loadNpmTasks('grunt-contrib-watch');
   // browser automatic reload on file change
   grunt.loadNpmTasks('grunt-browser-sync');
   //this default task runs when using 'grunt' command in terminal
   grunt.registerTask('default', ['browserSync', 'watch']);
};
