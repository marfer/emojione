module.exports = function (grunt) {

    var emoji = grunt.file.readJSON('emoji.json');

    function filterEmoji(category) {
        var result = [];
        Object.keys(emoji).filter(function (item) {
            return emoji[item].category == category;
        }).forEach(function (item) {
            return result.push('assets/png/' + emoji[item].unicode + '.png');
        });
        return result;
    }

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        emoji: grunt.file.readJSON('emoji.json'),
        jshint: {
            files: ['gruntfile.js', 'lib/js/emojione.js']
        },
        jsonlint: {
            files: {
                src: ['emoji.json', 'emoji_strategy.json']
            }
        },

        resize_crop:
        {

            objects_symbols: {
                options: {
                    height: 24,
                    width: 24
                },
                files: {
                    'assets/png24/objects_symbols': filterEmoji('objects_symbols')
                }
            },

            people: {
                options: {
                    height: 24,
                    width: 24
                },
                files: {
                    'assets/png24/people': filterEmoji('people')
                }
            },

            nature: {
                options: {
                    height: 24,
                    width: 24
                },
                files: {
                    'assets/png24/nature': filterEmoji('nature')
                }
            },

            celebration: {
                options: {
                    height: 24,
                    width: 24
                },
                files: {
                    'assets/png24/celebration': filterEmoji('celebration')
                }
            },

            activity: {
                options: {
                    height: 24,
                    width: 24
                },
                files: {
                    'assets/png24/activity': filterEmoji('activity')
                }
            },

            food_drink: {
                options: {
                    height: 24,
                    width: 24
                },
                files: {
                    'assets/png24/food_drink': filterEmoji('food_drink')
                }
            },

            travel_places: {
                options: {
                    height: 24,
                    width: 24
                },
                files: {
                    'assets/png24/travel_places': filterEmoji('travel_places')
                }
            },

            flags: {
                options: {
                    height: 24,
                    width: 24
                },
                files: {
                    'assets/png24/flags': filterEmoji('flags')
                }
            }

        },

        // BUILD PNG SPRITES
        sprite: {
            objects_symbols: {
                src: 'assets/png24/objects_symbols/*.png',
                dest: 'assets/sprites/objects_symbols.sprites.png',
                destCss: 'assets/sprites/objects_symbols.sprites.scss',
                'cssTemplate': 'assets/sprites/emojione.sprites.mustache',
                'algorithm': 'binary-tree',
                'cssVarMap': function (sprite) {
                    sprite.name = 'emojione-' + sprite.name;
                }
            },
            people: {
                src: 'assets/png24/people/*.png',
                dest: 'assets/sprites/people.sprites.png',
                destCss: 'assets/sprites/people.sprites.scss',
                'cssTemplate': 'assets/sprites/emojione.sprites.mustache',
                'algorithm': 'binary-tree',
                'cssVarMap': function (sprite) {
                    sprite.name = 'emojione-' + sprite.name;
                }
            },
            nature: {
                src: 'assets/png24/nature/*.png',
                dest: 'assets/sprites/nature.sprites.png',
                destCss: 'assets/sprites/nature.sprites.scss',
                'cssTemplate': 'assets/sprites/emojione.sprites.mustache',
                'algorithm': 'binary-tree',
                'cssVarMap': function (sprite) {
                    sprite.name = 'emojione-' + sprite.name;
                }
            },
            celebration: {
                src: 'assets/png24/celebration/*.png',
                dest: 'assets/sprites/celebration.sprites.png',
                destCss: 'assets/sprites/celebration.sprites.scss',
                'cssTemplate': 'assets/sprites/emojione.sprites.mustache',
                'algorithm': 'binary-tree',
                'cssVarMap': function (sprite) {
                    sprite.name = 'emojione-' + sprite.name;
                }
            },

            activity: {
                src: 'assets/png24/activity/*.png',
                dest: 'assets/sprites/activity.sprites.png',
                destCss: 'assets/sprites/activity.sprites.scss',
                'cssTemplate': 'assets/sprites/emojione.sprites.mustache',
                'algorithm': 'binary-tree',
                'cssVarMap': function (sprite) {
                    sprite.name = 'emojione-' + sprite.name;
                }
            },

            food_drink: {
                src: 'assets/png24/food_drink/*.png',
                dest: 'assets/sprites/food_drink.sprites.png',
                destCss: 'assets/sprites/food_drink.sprites.scss',
                'cssTemplate': 'assets/sprites/emojione.sprites.mustache',
                'algorithm': 'binary-tree',
                'cssVarMap': function (sprite) {
                    sprite.name = 'emojione-' + sprite.name;
                }
            },

            travel_places: {
                src: 'assets/png24/travel_places/*.png',
                dest: 'assets/sprites/travel_places.sprites.png',
                destCss: 'assets/sprites/travel_places.sprites.scss',
                'cssTemplate': 'assets/sprites/emojione.sprites.mustache',
                'algorithm': 'binary-tree',
                'cssVarMap': function (sprite) {
                    sprite.name = 'emojione-' + sprite.name;
                }
            },

            flags: {
                src: 'assets/png24/flags/*.png',
                dest: 'assets/sprites/flags.sprites.png',
                destCss: 'assets/sprites/flags.sprites.scss',
                'cssTemplate': 'assets/sprites/emojione.sprites.mustache',
                'algorithm': 'binary-tree',
                'cssVarMap': function (sprite) {
                    sprite.name = 'emojione-' + sprite.name;
                }
            }


        },
        // BUILD PNG SPRITES (SASS -> CSS)
        sass: {
            dist: {
                options: {
                    'sourcemap': false
                },
                files: {
                    'assets/sprites/emojione.sprites.css': 'assets/sprites/emojione.sprites.scss'
                    //'assets/css/emojione-awesome.css': 'lib/emojione-awesome/emojione-awesome.scss'
                }
            }
        },
        // BUILD SVG SPRITES
        svgstore: {
            options: {
                prefix: 'emoji-', // symbol ID prefix
                svg: {
                    viewBox: '0 0 64 64',
                    xmlns: 'http://www.w3.org/2000/svg',
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }
            },
            default: {
                files: {
                    'assets/sprites/emojione.sprites.svg': ['assets/svg/*.svg']
                }
            }
        },
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'lib/js/<%= pkg.name %>.min.js': ['lib/js/<%= pkg.name %>.js']
                }
            }
        },
        // OPTIMIZE PNGs
        imageoptim: {
            pngs: {
                src: ['assets/png', 'assets/png']
            },
            sprite: {
                src: ['assets/sprites', 'assets/sprites']
            }
        },
        // Minify Project CSS
        cssmin: {
            target: {
                files: {
                    'assets/css/emojione.min.css': ['assets/css/emojione.css'],
                    'assets/sprites/emojione.sprites.css': ['assets/sprites/emojione.sprites.css']
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }

    });


    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-imageoptim');
    grunt.loadNpmTasks('grunt-resize-crop');
    grunt.registerTask('default', ['jshint', 'jsonlint', 'resize_crop', 'sprite', 'sass', 'svgstore', 'uglify', 'cssmin', 'imageoptim']);
};