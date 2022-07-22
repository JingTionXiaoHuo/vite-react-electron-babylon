extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;
use web_sys::console;
            

#[wasm_bindgen]
pub fn greet(name: &str) {
    let bytes = name.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b'l' {
            console::log_1(&format!("{}", &name[..i]).into());
            return ;
        }
    }

    console::log_1(&format!("Hello, {}", &name[..]).into());
}