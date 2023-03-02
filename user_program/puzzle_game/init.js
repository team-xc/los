los_config.temporary_cache = {
    config: {
        "name": "puzzle game",
        "window": {
            "title": "Puzzle Game",
            "width": "1000px",
            "height": "630px"
        },
        "single_window": true,
        "allow_full_screen": true
    },
    ui: `
<link rel="stylesheet" href="user_program/puzzle_game/css/style.css">

<div id="puzzle_game">
    <div class="top-bar">
        <button class="button level-select-button">关卡</button>
    </div>

    <ol class="level-list"></ol>

    <canvas class="puzzle_game_canvas"></canvas>
    <p class="instruction"></p>
    <button class="button next-level-button">下一关</button>

    <div class="levels">

<pre id="intro-fixed1" data-blurb="Tutorial">
blurb: Tutorial
instruction: Drag cub to star
---
*=.=.
    !
. . .
    !
@=.=.
</pre>

        <pre id="intro-fixed2" data-blurb="Tutorial">
blurb: Tutorial
instruction: Drag grid to rotate. Cub and star moves with grid. Orange links stay in place.
---
* . .
    !
. . .
    !
@=.=.
</pre>

        <pre id="intro-fixed3" data-blurb="★">
blurb: ★
---
@=. .

. . .
    !
*=. .
</pre>

        <pre id="intro-free1" data-blurb="Tutorial">
blurb: Tutorial
instruction: Blue links move with grid. Rotate grid to connect blue and orange links in different ways.
---
@-. .
!   |
. . .
    |
*-.-.
</pre>

        <pre id="m3x3-2-med" data-blurb="★">
blurb: ★
---
. . *
| | |
. . .
| | |
@ .=.
</pre>

        <pre id="m3x3-fixed-switch" data-blurb="★">
blurb: ★
---
*=.-.

. . .
    |
@-. .
</pre>

        <pre id="m4x4-2" data-blurb="★">
blurb: ★
---
. .=. .
  | !
. . .-*
  |
. . . .

. @-. .
</pre>

        <pre id="m4x4-1" data-blurb="★">
blurb: ★
---
. . . .

* . . @
  | ! |
. . . .
  !
. . . .
</pre>

        <pre id="m4x4-3" data-blurb="★">
blurb: ★
---
. @ . .
! |
. . . .
      |
.=.=.-.
|
. * . .
</pre>

        <pre id="m4x4-4" data-blurb="★">
blurb: ★
---
. . . .

* . . .
    !
. . .-.
!
.=.=. @
</pre>

        <pre id="m4x4-5" data-blurb="★">
blurb: ★
---
.-.-.-.
|
@ .-.-.

* .=. .
!   |
.-.-. .
</pre>

        <pre id="m4x4-6-med" data-blurb="★">
blurb: ★
---
. * . .

.-.=. .
  |
. . . .
!   |
.=. @ .
</pre>

        <pre id="m4x4-7-hard1" data-blurb="★★">
blurb: ★★
---
. . *-.

.-.=. .
      |
.=. . .
  | |
@-.-.=.
</pre>

        <pre id="m4x4-8-hard2" data-blurb="★★">
blurb: ★★
---
.-@ .=.

. . . .
    |
.-. .-*
  |
. .=.-.
</pre>

        <pre id="m4x4-9-hard1" data-blurb="★★">
blurb: ★★
---
. . .=.
  !
@-. .-.

. .=. .

. . * .
</pre>

        <pre id="m4x4-10-hard1" data-blurb="★★">
blurb: ★★
---
. @=. .
  |
. .-.-.

.-.-.-.
!     !
. * . .
</pre>

        <pre id="m5x5-3" data-blurb="★">
. . . . .
  | !
. . .-. .
  |
. . . . *
  |
. . .=. .
  |
. @ . . .
</pre>

        <pre id="m5x5-1" data-blurb="★">
@-.-. .-.
    |
. . . . .

. . .=. .

. . . .=.
    |
. .=.-* .
</pre>

        <pre id="m5x5-2" data-blurb="★★">
. . . . .

. .=.-. @
|       !
. . . .-.

.=. . .=.
!
* . . . .
</pre>

        <pre id="m5x5-4" data-blurb="★★">
. . . .-.
      !
. .-. . .
  !     |
.=. . . .
|
. . . . *
|
.-@=. .=.
</pre>

        <pre id="m5x5-5" data-blurb="★★">
. . . . .

. . .-. *
    !
. . .-. .

.=. . . .
    |
. @-. . .
</pre>

        <pre id="m5x5-6" data-blurb="★★">
. . .-.-.
!   !
. .=.-. .
|
. .-. .-@
!
* .=. . .
      |
.=. .-.=.
</pre>

        <pre id="m5x5-7" data-blurb="★★★">
.=* . @=.
|
. .=. . .
|   | |
.=. . .-.
        |
. . . .=.
!
. .-.-. .
</pre>

        <pre id="m5x5-8" data-blurb="★★★">
. * . .-.
  |
. . .=.-.
!       |
. . . . .

. .-. .=.
        |
. . .=.-@
</pre>

        <pre id="m5x5-9" data-blurb="★★★">
.-.-. . .
    |
. . . .-@
  !
* . .-. .
|   !
.-. . .=.
    |   !
. . .=. .
</pre>

        <pre id="m5x5-10" data-blurb="★★">
. . . . .

. . . .-@
  !
* . .=. .
|   !
.-. . . .

. . . . .
</pre>

        <pre id="m5x5-11" data-blurb="★★★">
. . . .=.
  |
. . . .=.
|
. . .-. .
! |
. .=. . .
|   !   !
.-@ . * .
</pre>

        <pre id="m5x5-12" data-blurb="★★">
. . .=.=.

. . . . .

. . . . @

. . . . .

* . .=.=.
</pre>

        <pre id="m6x6-1-hard1" data-blurb="★★★">
. . * . . .
  ! | |
. .-. .-. .
          |
. . . . .-.
      | ! |
. . .=. . .
    |
@-.-. .-. .
          |
. .=. . .-.
</pre>

        <pre id="m6x6-2" data-blurb="★★★">
@ .=. . .=.
  | | !
. . . .=. .
  |     |
. . . .-. .
|   !
. . . . . *
|     |
.=. .-. . .
  |   | |
.-. . . .=.
</pre>

        <pre id="m6x6-3" data-blurb="★★★">
.=. .=.-.-*
  |
.-. . . . .
        | !
. . .-.-. .
!
.-. .=.=. .

@ .=. . . .
  |     !
. .-. .-. .
</pre>

        <pre id="pivot-4x4-intro" data-blurb="Tutorial">
instruction: Green links pivot with grid, but point in the same direction
---
. .-* .
  |
. . . .

. .>. .

. @ . .
</pre>

        <pre id="pivot-5x5-2" data-blurb="★★">
. . .-.-@

. .<. . .

.>. . . .
| !
.-.-. . *
  !
. . . . .
</pre>

        <pre id="pivot-5x5-swirly" data-blurb="★★★">
. . . . .
      ^
.<. . . *

. . . . .

@ . . .>.
  v
. . . . .
</pre>

        <pre id="pivot-5x5-1" data-blurb="★★★">
. .-. . .
      ^
. .<.=.=.

.>. . .-@

* . . .=.

. . . . .
</pre>

        <pre id="pivot-5x5-3" data-blurb="★★">
.=. . .-*
    v
. . . . .

. . .-.J.

@-. . . .
    v
.<. . . .
</pre>

        <pre id="pivot-5x5-4" data-blurb="★★★">
.-.-. @>.
!     ^
. . . . .
  |
. . . . .
  |
. . . .=*
    ^
. . .-. .>
</pre>

        <pre id="pivot-5x5-5" data-blurb="★★★">
.-. . . *

. .>. . .
|       v
.-. . . .
  ^
. . .-. .
      v
@=.=. . .
</pre>

        <pre id="pivot-5x5-6" data-blurb="★★★">
. . .>. .
  ! |
@=. .-. .

. . . .=.>

. . . . .

. *>.<. .
</pre>

        <pre id="pivot-5x5-7" data-blurb="★★★">
* . @ . .
v   |
. . . . .
      !
. . . . .
^     ! !
. .-. . .
  !
. . . . .
    v
</pre>

        <pre id="pivot-6x6-1" data-blurb="★★★">
. . . . . .
| v
@ . . . . *
  | |
. . . . . .
| !   ^ | K
. . . .-.=.
|
. .-. . . .
v
.>. . . . .
</pre>

        <pre id="pivot-6x6-3" data-blurb="★★★">
. @-. .>.-.

. . . . . .
          |
* .>. .=. .
    !
. . . . . .>
      |   ^
. . . .=. .

. .=. . .=.>
</pre>

        <pre id="pivot-6x6-2" data-blurb="★★★">
. .-.-. .=.
      v
. . . . . .
  |     ! v
.>. . . . *
    ^
. . . . . .
|
. .-.<. . .
! |       |
. . . .>.-@
</pre>

        <pre id="m44" data-blurb="★★">
. .=. *-.

. . .=. .
!
. . . . .
  |   !
. . . . .
  |     |
. @ . .=.
</pre>

        <pre id="m45" data-blurb="★★">
@ * .>. .

. .=.=. .
|     |
.>. . . .

. . . .>.
|
.=. . .-.
</pre>

        <pre id="m46" data-blurb="★★★">
.-. . .
    ^
. . . .

.L. . .
      !
@ . .-*
</pre>

        <pre id="m47" data-blurb="★★">
@ . . . . .
v v v v v v
. . . . . .

. . . . . .

. . . . . .
  v v v v v
. . . . . .

. . . .=. *
v v v v   v
</pre>

        <pre id="m48" data-blurb="★">
.-.<.>.=. .
W !       |
. . .A. . *
    |   |
. .=. . . .
^ !
. .D.-.=.=@
          |
. . .-.-. .
|
.#.=. .<. .
    v     v
</pre>

        <pre id="m49" data-blurb="★★★">
. . .-@ .
    |
. . . .J.

* . . . .
| !     !
. . . . .
    v   !
. . . .-.
</pre>

        <pre id="m50" data-blurb="★★★">
*=. . .
    v
. . . .
^     |
. . . .
  ^   |
@ .>. .
</pre>

        <pre id="rotate-tut" data-blurb="Tutorial">
instruction: Red links are fixed in place, but rotate with grid
---
. . . .

@ .4. .
  |
. . .-*

. . . .
</pre>

        <pre id="rotate1" data-blurb="★">
. . .-*
    |
. . . .
    5
.4. . .
|
@ . . .
</pre>

        <pre id="rotate2" data-blurb="★★">
@ .-.=.
    |
. . .4.
    |
* . . .
|   |
. . . .
</pre>

        <pre id="rotate3" data-blurb="★★">
. . * .
! 5 v
. . . @
  |
. .4. .
  !
. . . .
</pre>

        <pre id="rotate3b" data-blurb="★★">
* . . .
! 5
. . . @
  |
. .4. .
  !
. . . .
</pre>

        <pre id="rotate-5x5-1" data-blurb="★★">
. . . .-@
      8
. .=. . .

*=. . . .

. .-. . .

. . . . .
</pre>

        <pre id="rotate-5x5-2" data-blurb="★★">
. . . . .

. . . .6*
  |
. . . .=.
  |
.4. . . .
        |
. . . .-@
</pre>

        <pre id="rotate-5x5-2b" data-blurb="★★★">
. . . . .
  !   |
.-.-. . .
  v   |
. . .-. .

@ . . . .
    5
. . .=* .
</pre>

        <pre id="rotate-6x6-1" data-blurb="★★★">
@4.=. . . .

. . . . . .
      v 8 |
.-.-. . . .
!   !   ^
. . . . . .

. .>. . . .
!
* . .4. . .
</pre>

        <pre id="rotate-6x6-2" data-blurb="★★★">
. . *<. . .

.=. .-. . .
        5
. . . .-. .
        |
. . . . . .

. . . . . .
    5     |
. .=. . @-.
</pre>

        <pre id="rotate-6x6-3" data-blurb="★★★">
.4. . . . @
!
.-. . .=. .
!
. . . . . .
!
.>.6. . . .
!
. . . .=.-.
      ^
. . . . * .
</pre>


    </div>
</div>
`
};