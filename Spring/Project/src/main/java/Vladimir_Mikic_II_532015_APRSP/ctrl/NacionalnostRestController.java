package Vladimir_Mikic_II_532015_APRSP.ctrl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Vladimir_Mikic_II_532015_APRSP.jpa.Nacionalnost;
import Vladimir_Mikic_II_532015_APRSP.reps.NacionalnostRepository;

@RestController
public class NacionalnostRestController {
	@Autowired
	private NacionalnostRepository nacionalnostRepository;
	
	@CrossOrigin
    @GetMapping("nacionalnost")
    public Collection<Nacionalnost>getAll(){
        return nacionalnostRepository.findAll();
    }

	@CrossOrigin
	@GetMapping("nacionalnost/{id}")
	public Nacionalnost getOne (@PathVariable("id") Integer id) {
		return nacionalnostRepository.getOne(id);
	}
	
	@CrossOrigin
    @PostMapping("nacionalnost")
    public ResponseEntity<HttpStatus> addNacionalnost (@RequestBody Nacionalnost nacionalnost){
        nacionalnostRepository.save(nacionalnost);
        return new ResponseEntity<HttpStatus>(HttpStatus.CREATED);
    }
	
	@CrossOrigin
    @PutMapping("nacionalnost/{id}")
    public ResponseEntity<HttpStatus> updateNacionalnost (@RequestBody Nacionalnost nacionalnost, @PathVariable ("id") Integer id){
        if(nacionalnostRepository.existsById(id)) {
            nacionalnost.setId(id);
            nacionalnostRepository.save(nacionalnost);
            return new ResponseEntity<HttpStatus>(HttpStatus.OK);
        }
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }
	
	@CrossOrigin
    @DeleteMapping("nacionalnost/{id}")
    public ResponseEntity<HttpStatus> deleteNacionalnost (@PathVariable ("id") Integer id){
        if(nacionalnostRepository.existsById(id)) {
            nacionalnostRepository.deleteById(id);
            return new ResponseEntity<HttpStatus>(HttpStatus.OK);
        }
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }
	
}
