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

import Vladimir_Mikic_II_532015_APRSP.jpa.Tim;
import Vladimir_Mikic_II_532015_APRSP.reps.TimRepository;

@RestController
public class TimRestController {
	
	@Autowired
	private TimRepository timRepository;
	
	@CrossOrigin
	@GetMapping ("tim")
	public Collection<Tim>getAll(){
		return timRepository.findAll();
	}
	
	@CrossOrigin
	@GetMapping("tim/{id}")
	public Tim getOne (@PathVariable("id") Integer id) {
		return timRepository.getOne(id);
	}
	
	@CrossOrigin
	@PostMapping ("tim")
	public ResponseEntity<HttpStatus> addTim (@RequestBody Tim tim){
		timRepository.save(tim);
		return new ResponseEntity<HttpStatus>(HttpStatus.CREATED);
	}
	
	@CrossOrigin
	@PutMapping ("tim/{id}")
	public ResponseEntity<HttpStatus> updateTim (@RequestBody Tim tim, @PathVariable ("id") Integer id){
		if (timRepository.existsById(id)) {
			tim.setId(id);
			timRepository.save(tim);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
	
	@CrossOrigin
	@DeleteMapping ("tim/{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable ("id") Integer id){
		if (timRepository.existsById(id)) {
				timRepository.deleteById(id);
				return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}

}
