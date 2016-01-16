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
         files: ['css/*.styl', 'index.html'],
         tasks: ['stylus'],
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

   });
   // register grunt plugins below
   grunt.loadNpmTasks('grunt-contrib-stylus');
   grunt.loadNpmTasks('grunt-contrib-watch');
   // browser automatic reload on file change
   grunt.loadNpmTasks('grunt-browser-sync');
   //this default task runs when using 'grunt' command in terminal
   grunt.registerTask('default', ['browserSync', 'watch']);
};
